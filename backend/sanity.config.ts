import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { googleAnalytics } from './plugins/analytics'

export default defineConfig({
  name: 'default',
  title: 'portfolio',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
  dataset: process.env.SANITY_STUDIO_DATASET!,

  plugins: [
    structureTool(),
    visionTool(),
    googleAnalytics({
      trackingId: process.env.SANITY_STUDIO_GA_TRACKING_ID!,
      debug: process.env.NODE_ENV === 'development'
    })
  ],

  schema: {
    types: schemaTypes,
  },
})
