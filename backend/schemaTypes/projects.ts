import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Title of the project',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Brief description of the project',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'impact',
      title: 'Impact',
      type: 'text',
      description: 'Impact or outcome of the project',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      description: 'Your role in the project (e.g., Product Design · Frontend Development)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tech',
      title: 'Technologies',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Technologies used in the project (e.g., Next.js, TypeScript)',
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      description: 'Thumbnail image for the project',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'vercelLink',
      title: 'Vercel Link',
      type: 'url',
      description: 'Link to the deployed project on Vercel or other hosting platform',
    }),
    defineField({
      name: 'githubLink',
      title: 'GitHub Link',
      type: 'url',
      description: 'Link to the GitHub repository',
    }),
    defineField({
      name: 'behanceLink',
      title: 'Behance Link',
      type: 'url',
      description: 'Link to the Behance case study or showcase',
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Order to display the project',
      initialValue: 0,
    }),
    defineField({
      name: 'analytics',
      title: 'Analytics',
      type: 'object',
      description: 'Analytics data for the project',
      fields: [
        { name: 'clickCount', type: 'number', title: 'Click Count', initialValue: 0 },
        { name: 'viewCount', type: 'number', title: 'View Count', initialValue: 0 },
        { name: 'averageTimeSpent', type: 'number', title: 'Average Time Spent (seconds)', initialValue: 0 },
      ],
    }),
  ],
});