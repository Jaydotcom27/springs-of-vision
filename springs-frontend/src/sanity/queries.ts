import { groq } from 'next-sanity'

export const siteSettingsQuery = groq`
*[_type == "siteSettings"][0]{
  heroHeadline,
  heroSubheadline,
  heroImage,
  featuredImages,

  ctaHeadline,
  ctaText,
  ctaButtonLabel,
  ctaButtonHref,
  ctaImage
}
`
