'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'

type NavItem = {
  label: string
  href: string
}

export default function Navbar() {
  const navItems: NavItem[] = useMemo(
    () => [
      { label: 'Home', href: '/' },
      { label: 'Portfolio', href: '/portfolio' },
      { label: 'Our Process', href: '/process' },
      { label: 'Investment', href: '/investment' },
      { label: 'Contact', href: '/contact' },
    ],
    []
  )

  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!mobileOpen) return
    const original = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = original
    }
  }, [mobileOpen])

  return (
    <>
      <header
        className={[
          'fixed inset-x-0 top-0 z-50 transition-colors duration-200',
          scrolled
            ? 'bg-white/95 backdrop-blur border-b border-black/5'
            : 'bg-transparent',
        ].join(' ')}
      >
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="text-sm tracking-[0.25em] uppercase font-medium"
              aria-label="Go to home"
            >
              Springs of Vision
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    'text-sm tracking-wide transition-colors',
                    scrolled
                      ? 'text-zinc-900 hover:text-zinc-600'
                      : 'text-white hover:text-white/80',
                  ].join(' ')}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <button
              type="button"
              className={[
                'md:hidden inline-flex items-center justify-center rounded-md p-2 transition',
                scrolled
                  ? 'text-zinc-900 hover:bg-zinc-100'
                  : 'text-white hover:bg-white/10',
              ].join(' ')}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(true)}
            >
              <span className="sr-only">Open menu</span>
              <div className="space-y-1">
                <div className="h-0.5 w-6 bg-current" />
                <div className="h-0.5 w-6 bg-current" />
                <div className="h-0.5 w-6 bg-current" />
              </div>
            </button>
          </div>
        </div>
      </header>

      <div
        className={[
          'fixed inset-0 z-50 md:hidden',
          mobileOpen ? 'pointer-events-auto' : 'pointer-events-none',
        ].join(' ')}
        aria-hidden={!mobileOpen}
      >
        <button
          type="button"
          className={[
            'absolute inset-0 bg-black/40 transition-opacity duration-200',
            mobileOpen ? 'opacity-100' : 'opacity-0',
          ].join(' ')}
          aria-label="Close menu"
          onClick={() => setMobileOpen(false)}
        />

        <aside
          className={[
            'absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-xl',
            'transition-transform duration-200',
            mobileOpen ? 'translate-x-0' : 'translate-x-full',
          ].join(' ')}
        >
          <div className="flex items-center justify-between h-16 px-4 sm:px-6 border-b border-black/5">
            <span className="text-sm tracking-[0.25em] uppercase font-medium">
              Menu
            </span>
            <button
              type="button"
              className="rounded-md p-2 text-zinc-900 hover:bg-zinc-100"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <div className="relative h-5 w-5">
                <div className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 rotate-45 bg-current" />
                <div className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 -rotate-45 bg-current" />
              </div>
            </button>
          </div>

          <nav className="px-4 sm:px-6 py-6">
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block py-2 text-base text-zinc-900 tracking-wide"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center w-full rounded-full px-5 py-3 text-sm tracking-wide bg-zinc-900 text-white hover:bg-zinc-800 transition"
                onClick={() => setMobileOpen(false)}
              >
                Inquire
              </Link>
            </div>
          </nav>
        </aside>
      </div>
    </>
  )
}
