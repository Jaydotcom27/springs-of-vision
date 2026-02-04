import Hero from '@/components/Hero'
import HeroIntro from '@/components/HeroIntro'
import FeaturedGrid from '@/components/FeaturedGrid'
import PortfolioCta from '@/components/PortfolioCta'
import ActionLinks from '@/components/ActionLinks'
import { client } from '@/sanity/client'
import { siteSettingsQuery } from '@/sanity/queries'
import { urlFor } from '@/sanity/image'

type SiteSettings = {
  heroHeadline?: string
  heroSubheadline?: string
  heroImage?: any
  featuredImages?: any[]

  ctaHeadline?: string
  ctaText?: string
  ctaButtonLabel?: string
  ctaButtonHref?: string
  ctaImage?: any
}

export default async function Home() {
  const settings = (await client.fetch(
    siteSettingsQuery
  )) as SiteSettings | null

  const imageUrl = settings?.heroImage
    ? urlFor(settings.heroImage).width(2400).height(1600).quality(85).url()
    : 'https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?auto=format&fit=crop&w=2400&q=80'

  const headline = settings?.heroHeadline ?? 'Default headline'
  const subheadline = settings?.heroSubheadline ?? 'Default subheadline'

  return (
    <>
      <Hero imageUrl={imageUrl} headline={headline} subheadline={subheadline} />
      <HeroIntro />
      <FeaturedGrid
        images={settings?.featuredImages ?? []}
        title="Highlights"
      />
      {settings?.ctaImage ? (
        <PortfolioCta
          headline={settings?.ctaHeadline ?? 'See the full story.'}
          text={
            settings?.ctaText ??
            'Explore a curated collection of weddings, portraits, and quiet in-between moments — captured with intention.'
          }
          buttonLabel={settings?.ctaButtonLabel ?? 'See Portfolio'}
          buttonHref={settings?.ctaButtonHref ?? '/portfolio'}
          image={settings.ctaImage}
        />
      ) : null}
      <ActionLinks />
    </>
  )
}
