import Link from 'next/link'

type HeroIntroProps = {
  headline?: string
  eyebrow?: string
  ctaLabel?: string
  ctaHref?: string
}

export default function HeroIntro({
  headline = 'Where Love Stories Spring to Life.',
  eyebrow = 'SPRINGS OF VISION',
  ctaLabel = 'Inquire',
  ctaHref = '/contact',
}: HeroIntroProps) {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center">
          <h2 className="mx-auto max-w-3xl text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-zinc-900">
            {headline}
          </h2>

          <p className="mt-8 text-xs tracking-[0.35em] uppercase text-zinc-600">
            {eyebrow}
          </p>

          <div className="mt-10 flex justify-center">
            <Link
              href={ctaHref}
              className="
                inline-flex items-center justify-center
                px-7 py-3
                text-sm sm:text-base
                tracking-wide
                border border-black
                bg-white
                text-black
                hover:bg-zinc-50
                transition
                focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30
              "
            >
              {ctaLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
