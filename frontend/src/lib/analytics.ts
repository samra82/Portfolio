import { createClient } from '@sanity/client';

// Initialize Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: true, // Use CDN for read operations
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-10-24',
});

export async function getAllVisitors() {
  const query = `*[_type == "visitor"]`;
  return await client.fetch(query);
}

export async function getVisitorStats() {
  const query = `{
    "totalVisitors": count(*[_type == "visitor"]),
    "totalPageViews": sum(*[_type == "visitor"].length(pageVisits)),
    "uniquePages": count(*[_type == "visitor"][0].visitedPages[]),
    "totalProjectClicks": sum(*[_type == "visitor"].length(projectClicks)),
    "avgTimeSpent": avg(*[_type == "visitor"][totalTimeSpent > 0].totalTimeSpent)
  }`;
  return await client.fetch(query);
}

export async function getProjectAnalytics() {
  const query = `*[_type == "project"]{_id, title, "analytics": analytics}`;
  return await client.fetch(query);
}

export async function getTopVisitedPages() {
  const query = `*[_type == "visitor"] {
    pageVisits[]
  } | order(_score desc)`;
  return await client.fetch(query);
}

export async function getVisitorDemographics() {
  const query = `*[_type == "visitor"] {
    location
  }`;
  return await client.fetch(query);
}

export async function getVisitorsOverTime() {
  // This would require additional data processing
  // For now, return mock data based on existing visitor data
  const query = `*[_type == "visitor"] {
    firstVisit
  } | order(firstVisit asc)`;
  const visitors = await client.fetch(query);

  // Group visitors by date
  const visitorsByDate: Record<string, number> = {};
  visitors.forEach((visitor: any) => {
    if (visitor.firstVisit) {
      const date = new Date(visitor.firstVisit).toISOString().split('T')[0];
      visitorsByDate[date] = (visitorsByDate[date] || 0) + 1;
    }
  });

  // Convert to chart format
  const chartData = Object.entries(visitorsByDate).map(([date, visitors]) => ({
    date,
    visitors,
    pageViews: visitors * Math.floor(Math.random() * 3 + 1) // Mock page views
  })).slice(-30); // Last 30 days

  return chartData;
}

export async function getProjectClicksData() {
  // Get project click data
  const query = `*[_type == "visitor"] {
    projectClicks[] {
      projectTitle
    }
  }`;
  const visitors = await client.fetch(query);

  // Count clicks per project
  const projectClicks: Record<string, number> = {};
  visitors.forEach((visitor: any) => {
    if (visitor.projectClicks) {
      visitor.projectClicks.forEach((click: any) => {
        if (click.projectTitle) {
          projectClicks[click.projectTitle] = (projectClicks[click.projectTitle] || 0) + 1;
        }
      });
    }
  });

  // Convert to chart format
  const chartData = Object.entries(projectClicks).map(([name, clicks]) => ({
    name,
    clicks
  }));

  return chartData;
}

export async function getTimeSpentData() {
  // Get average time spent data
  const query = `*[_type == "visitor" && defined(totalTimeSpent)] {
    firstVisit,
    totalTimeSpent
  } | order(firstVisit asc)`;
  const visitors = await client.fetch(query);

  // Group by date and calculate average time spent
  const timeByDate: Record<string, { total: number, count: number }> = {};
  visitors.forEach((visitor: any) => {
    if (visitor.firstVisit && visitor.totalTimeSpent) {
      const date = new Date(visitor.firstVisit).toISOString().split('T')[0];
      if (!timeByDate[date]) {
        timeByDate[date] = { total: 0, count: 0 };
      }
      timeByDate[date].total += visitor.totalTimeSpent;
      timeByDate[date].count++;
    }
  });

  // Convert to chart format with averages
  const chartData = Object.entries(timeByDate).map(([date, data]) => ({
    date,
    timeSpent: Math.round(data.total / data.count)
  })).slice(-30); // Last 30 days

  return chartData;
}