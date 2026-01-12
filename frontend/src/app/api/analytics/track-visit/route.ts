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
    const { sessionId, pageUrl, userAgent, ipAddress, referrer, location } = await request.json();

    // Get or create visitor document
    const visitorQuery = `*[_type == "visitor" && sessionId == $sessionId][0]`;

    const existingVisitor = await client.fetch(visitorQuery, { sessionId });

    if (existingVisitor) {
      // Update existing visitor
      await client.patch(existingVisitor._id)
        .set({
          lastVisit: new Date().toISOString(),
          'pageVisits': [
            ...(existingVisitor.pageVisits || []),
            {
              page: pageUrl,
              timestamp: new Date().toISOString(),
              timeSpent: 0, // Will be updated when they leave the page
            }
          ],
          'visitedPages': Array.from(new Set([...(existingVisitor.visitedPages || []), pageUrl])),
        })
        .commit();
    } else {
      // Create new visitor document
      await client.create({
        _type: 'visitor',
        sessionId,
        ipAddress,
        userAgent,
        referrer,
        location,
        visitedPages: [pageUrl],
        pageVisits: [{
          page: pageUrl,
          timestamp: new Date().toISOString(),
          timeSpent: 0,
        }],
        firstVisit: new Date().toISOString(),
        lastVisit: new Date().toISOString(),
        isReturning: false,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error tracking visit:', error);
    return NextResponse.json(
      { error: 'Failed to track visit' },
      { status: 500 }
    );
  }
}