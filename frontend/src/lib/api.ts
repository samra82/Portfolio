import { client } from "./sanity";

export async function getProjects() {
  try {
    const projects = await client.fetch(
      `*[_type == "project"] | order(order asc) {
        _id,
        title,
        description,
        impact,
        role,
        tech,
        thumbnail,
        vercelLink,
        githubLink,
        behanceLink,
        order,
        analytics
      }`
    );
    if (projects && projects.length) return projects;
  } catch (e) {
    console.error('Sanity fetch error:', e);
  }
  // Fallback mock data when Sanity is unavailable
  return [
    {
      _id: 'mock-1',
      title: 'Sample Project',
      description: 'A placeholder project displayed when no data is loaded.',
      impact: 'Demonstrates layout.',
      role: 'Developer',
      tech: ['Next.js', 'TypeScript', 'Tailwind'],
      thumbnail: null,
      vercelLink: '',
      githubLink: '',
      behanceLink: '',
    },
  ];
}

