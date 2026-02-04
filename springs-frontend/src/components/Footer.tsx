'use client'

import Link from 'next/link'

type Social = {
  label: string
  href: string
}

export default function Footer() {
  const socials: Social[] = [
    { label: 'Instagram', href: '#' },
    { label: 'Pinterest', href: '#' },
    { label: 'Facebook', href: '#' },
  ]

  const year = new Date().getFullYear()

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="w-full bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between border-t border-black/10 pt-8">
          {/* Left: © */}
          <div className="text-xs tracking-[0.25em] uppercase text-zinc-700">
            © {year} Springs of Vision
          </div>

          {/* Middle: socials */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {socials.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                className="text-xs tracking-[0.25em] uppercase text-zinc-700 hover:text-zinc-900 transition"
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel={
                  s.href.startsWith('http') ? 'noopener noreferrer' : undefined
                }
              >
                {s.label}
              </Link>
            ))}
          </div>

          {/* Right: back to top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="
              text-xs tracking-[0.25em] uppercase
              text-zinc-700 hover:text-zinc-900
              border border-black
              bg-white
              px-4 py-2
              transition
              focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30
            "
          >
            Back to top
          </button>
        </div>
      </div>
    </footer>
  )
}
