import Link from 'next/link'

type ActionLink = {
  title: string
  href: string
  description: string
}

type ActionLinksProps = {
  items?: ActionLink[]
}

export default function ActionLinks({
  items = [
    {
      title: 'Investment',
      href: '/investment',
      description:
        'Transparent collections, simple packages, and what to expect.',
    },
    {
      title: 'Our Process',
      href: '/process',
      description:
        'A calm, guided experience from inquiry to gallery delivery.',
    },
    {
      title: 'Contact',
      href: '/contact',
      description:
        'Tell us about your date, location, and the vision you’re building.',
    },
  ],
}: ActionLinksProps) {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {items.map((item) => (
            <Link key={item.href} href={item.href} className="group block">
              <div className="space-y-4">
                <div className="inline-flex items-baseline gap-3">
                  <h3 className="text-2xl sm:text-3xl font-light tracking-tight text-zinc-900">
                    {item.title}
                  </h3>

                  {/* Elegant line that animates on hover */}
                  <span className="h-px w-10 bg-zinc-900/40 transition-all duration-200 group-hover:w-16 group-hover:bg-zinc-900" />
                </div>

                <p className="text-sm sm:text-base text-zinc-700 leading-relaxed max-w-prose">
                  {item.description}
                </p>

                <p className="text-xs tracking-[0.25em] uppercase text-zinc-600 group-hover:text-zinc-900 transition">
                  Learn more
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
