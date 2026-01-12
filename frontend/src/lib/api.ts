import { client } from "./sanity";

export async function getProjects() {
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
  return projects;
}

// Function to increment view count for a project
export async function incrementProjectView(projectId: string) {
  try {
    await client.patch(projectId).inc({ "analytics.viewCount": 1 }).commit();
  } catch (error) {
    console.error("Error incrementing view count:", error);
  }
}

// Function to increment click count for a project
export async function incrementProjectClick(projectId: string) {
  try {
    await client.patch(projectId).inc({ "analytics.clickCount": 1 }).commit();
  } catch (error) {
    console.error("Error incrementing click count:", error);
  }
}