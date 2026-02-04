import Image from 'next/image'

type HeroProps = {
  imageUrl: string
  headline: string
  subheadline?: string | null
}

export default function Hero({ imageUrl, headline, subheadline }: HeroProps) {
  return (
    <section className="relative h-dvh min-h-[520px] w-full">
      <div className="absolute inset-0">
        <Image
          src={imageUrl}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/35" />
      </div>

      <div className="relative z-10 h-full">
        <div className="mx-auto flex h-full w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="m-auto text-center text-white">
            <p className="text-xs tracking-[0.35em] uppercase opacity-90">
              Wedding Photography
            </p>

            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight">
              {headline}
            </h1>

            {subheadline ? (
              <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base text-white/90">
                {subheadline}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}
