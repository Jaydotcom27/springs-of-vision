import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/sanity/image'

type PortfolioCtaProps = {
  headline: string
  text: string
  buttonLabel: string
  buttonHref: string
  image: any
}

export default function PortfolioCta({
  headline,
  text,
  buttonLabel,
  buttonHref,
  image,
}: PortfolioCtaProps) {
  const imageUrl = urlFor(image).width(1600).height(1200).quality(85).url()

  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-light tracking-tight text-zinc-900">
              {headline}
            </h3>

            <p className="mt-4 text-sm sm:text-base text-zinc-700 max-w-prose">
              {text}
            </p>

            <div className="mt-8">
              <Link
                href={buttonHref}
                className="
                    inline-flex items-center justify-center
                    border border-black
                    bg-white
                    text-black
                    px-5 py-3
                    text-sm tracking-wide
                    hover:bg-zinc-50
                    transition
                    "
              >
                {buttonLabel}
              </Link>
            </div>
          </div>

          {/* Right image */}
          <div className="relative overflow-hidden bg-zinc-100 aspect-[3/4] sm:aspect-[2/3]">
            <Image
              src={imageUrl}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
