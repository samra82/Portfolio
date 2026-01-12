import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'visitor',
  title: 'Visitor',
  type: 'document',
  fields: [
    defineField({
      name: 'sessionId',
      title: 'Session ID',
      type: 'string',
      description: 'Unique session identifier',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ipAddress',
      title: 'IP Address',
      type: 'string',
      description: 'Visitor IP address',
    }),
    defineField({
      name: 'userAgent',
      title: 'User Agent',
      type: 'string',
      description: 'Browser and OS information',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'object',
      fields: [
        { name: 'country', type: 'string', title: 'Country' },
        { name: 'city', type: 'string', title: 'City' },
        { name: 'region', type: 'string', title: 'Region' },
        { name: 'timezone', type: 'string', title: 'Timezone' },
      ],
    }),
    defineField({
      name: 'referrer',
      title: 'Referrer',
      type: 'string',
      description: 'Where the visitor came from',
    }),
    defineField({
      name: 'visitedPages',
      title: 'Visited Pages',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of pages visited during the session',
    }),
    defineField({
      name: 'pageVisits',
      title: 'Page Visits',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'page', type: 'string', title: 'Page URL' },
          { name: 'timestamp', type: 'datetime', title: 'Visit Time' },
          { name: 'timeSpent', type: 'number', title: 'Time Spent (seconds)' },
        ]
      }],
      description: 'Detailed page visit information',
    }),
    defineField({
      name: 'projectClicks',
      title: 'Project Clicks',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'projectId', type: 'string', title: 'Project ID' },
          { name: 'projectTitle', type: 'string', title: 'Project Title' },
          { name: 'timestamp', type: 'datetime', title: 'Click Time' },
        ]
      }],
      description: 'Projects clicked by the visitor',
    }),
    defineField({
      name: 'totalTimeSpent',
      title: 'Total Time Spent',
      type: 'number',
      description: 'Total time spent on the site in seconds',
    }),
    defineField({
      name: 'firstVisit',
      title: 'First Visit',
      type: 'datetime',
      description: 'When the visitor first visited',
    }),
    defineField({
      name: 'lastVisit',
      title: 'Last Visit',
      type: 'datetime',
      description: 'When the visitor last visited',
    }),
    defineField({
      name: 'isReturning',
      title: 'Is Returning Visitor',
      type: 'boolean',
      description: 'Whether this is a returning visitor',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      sessionId: 'sessionId',
      firstVisit: 'firstVisit',
      totalTimeSpent: 'totalTimeSpent',
    },
    prepare(selection) {
      const { sessionId, firstVisit, totalTimeSpent } = selection;
      return {
        title: `Visitor: ${sessionId}`,
        subtitle: `First visit: ${firstVisit ? new Date(firstVisit).toLocaleDateString() : 'N/A'} | Time: ${totalTimeSpent || 0}s`,
      };
    },
  },
});