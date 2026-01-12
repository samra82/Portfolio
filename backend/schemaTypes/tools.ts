import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'tool',
  title: 'Tool',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Name of the tool (e.g., React, Next.js)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      description: 'React icon name (e.g., SiReact, RiNextjsFill)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'iconLibrary',
      title: 'Icon Library',
      type: 'string',
      description: 'Choose the icon library',
      options: {
        list: [
          { title: 'Simple Icons (si)', value: 'si' },
          { title: 'Remix Icons (ri)', value: 'ri' },
          { title: 'Feather Icons (fi)', value: 'fi' },
          { title: 'Bootstrap Icons (bi)', value: 'bi' },
          { title: 'Material Icons (mdi)', value: 'mdi' },
        ],
      },
      initialValue: 'si',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Order to display the tool',
      initialValue: 0,
    }),
  ],
});