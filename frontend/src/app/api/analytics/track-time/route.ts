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
    const { sessionId, pageUrl, timeSpent } = await request.json();

    // Get visitor document
    const visitorQuery = `*[_type == "visitor" && sessionId == $sessionId][0]`;

    const existingVisitor = await client.fetch(visitorQuery, { sessionId });

    if (existingVisitor) {
      // Update the time spent for the specific page
      const updatedPageVisits = (existingVisitor.pageVisits || []).map((visit: any) => {
        if (visit.page === pageUrl && !visit.timeSpent) {
          return {
            ...visit,
            timeSpent: Math.round(timeSpent),
          };
        }
        return visit;
      });

      // Calculate total time spent
      const totalTimeSpent = updatedPageVisits.reduce((total: number, visit: any) => {
        return total + (visit.timeSpent || 0);
      }, 0);

      // Update visitor document with time spent
      await client.patch(existingVisitor._id)
        .set({
          'pageVisits': updatedPageVisits,
          totalTimeSpent,
        })
        .commit();
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error tracking time spent:', error);
    return NextResponse.json(
      { error: 'Failed to track time spent' },
      { status: 500 }
    );
  }
}