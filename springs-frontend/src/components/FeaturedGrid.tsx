import Image from 'next/image'
import { urlFor } from '@/sanity/image'

type FeaturedGridProps = {
  images: any[] // Sanity image objects
  title?: string
}

export default function FeaturedGrid({ images }: FeaturedGridProps) {
  if (!images || images.length === 0) return null

  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {images.slice(0, 4).map((img, idx) => {
            const src = urlFor(img).width(1200).height(1500).quality(85).url()

            return (
              <div
                key={idx}
                className="relative overflow-hidden bg-zinc-100 aspect-[4/5]"
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
