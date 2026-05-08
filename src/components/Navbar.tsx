import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Menu', href: '#menu' },
  { label: 'Story', href: '#story' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-neutral/95 backdrop-blur-sm shadow-[0_2px_8px_rgba(42,33,24,0.06)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-editorial flex items-center justify-between h-[72px]">
        {/* Logo */}
        <a href="#" className="font-display text-2xl tracking-tight text-brand-primary">
          Cafe Miel
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-nav text-brand-primary hover:text-brand-tertiary transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA + Cart */}
        <div className="hidden md:flex items-center gap-4">
          <button
            className="relative p-2 text-brand-primary hover:text-brand-tertiary transition-colors duration-200"
            aria-label="Shopping cart"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="8" cy="21" r="1"/>
              <circle cx="19" cy="21" r="1"/>
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
            </svg>
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-brand-tertiary text-white text-[9px] font-bold rounded-full flex items-center justify-center">
              3
            </span>
          </button>
          <Button
            className="bg-brand-primary text-brand-on-primary hover:bg-brand-tertiary text-label-caps rounded-full px-7 py-3 h-auto transition-colors duration-200 cursor-pointer"
          >
            ORDENAR
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button className="md:hidden p-2 text-brand-primary" aria-label="Open menu">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-brand-neutral border-brand-border w-[300px] pt-16">
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-nav text-brand-primary hover:text-brand-tertiary transition-colors duration-200 text-lg"
                >
                  {link.label}
                </a>
              ))}
              <Button className="bg-brand-primary text-brand-on-primary hover:bg-brand-tertiary text-label-caps rounded-full px-7 py-3 h-auto mt-4 transition-colors duration-200 cursor-pointer">
                ORDENAR
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}
