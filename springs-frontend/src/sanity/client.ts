import { createClient } from 'next-sanity'
import { sanityConfig } from './config'

/**
 * Public client
 * - Used for all published content
 * - CDN enabled
 * - No token
 */
export const client = createClient({
  ...sanityConfig,
  useCdn: true,
})

/**
 * Preview / server-only client
 * - CDN disabled
 * - Uses token (when needed)
 */
export const previewClient = createClient({
  ...sanityConfig,
  useCdn: false,
  token: process.env.SANITY_READ_TOKEN,
})
