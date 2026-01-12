import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@sanity/client';

// Initialize Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false, // Set to false for mutations
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-10-24',
  token: process.env.SANITY_API_TOKEN, // Needed for write operations
});

export async function POST(request: NextRequest) {
  try {
    const { sessionId, projectId, projectTitle } = await request.json();

    // Get or create visitor document
    const visitorQuery = `*[_type == "visitor" && sessionId == $sessionId][0]`;

    const existingVisitor = await client.fetch(visitorQuery, { sessionId });

    if (existingVisitor) {
      // Update existing visitor with project click
      await client.patch(existingVisitor._id)
        .set({
          'projectClicks': [
            ...(existingVisitor.projectClicks || []),
            {
              projectId,
              projectTitle,
              timestamp: new Date().toISOString(),
            }
          ],
        })
        .commit();

      // Update project analytics
      await client.patch(projectId)
        .inc({
          'analytics.clickCount': 1,
          'analytics.viewCount': 1,
        })
        .commit();
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error tracking project click:', error);
    return NextResponse.json(
      { error: 'Failed to track project click' },
      { status: 500 }
    );
  }
}