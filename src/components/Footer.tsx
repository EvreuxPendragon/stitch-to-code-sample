const footerLinks = {
  explore: [
    { label: 'About Us', href: '#story' },
    { label: 'Menu', href: '#menu' },
    { label: 'Shipping', href: '#' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Contact', href: '#contact' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-brand-primary text-brand-on-primary pt-16 pb-8">
      <div className="container-editorial">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-display text-3xl text-brand-on-primary mb-4">Cafe Miel</h3>
            <p className="text-body-md text-brand-on-primary/70 max-w-sm leading-relaxed">
              Horneado lentamente, preparado con intención. Cada visita es una invitación a detenerte y disfrutar.
            </p>
          </div>

          {/* Explore */}
          <div>
            <p className="text-label-caps text-brand-tertiary mb-4 tracking-[0.14em]">EXPLORAR</p>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-nav text-brand-on-primary/70 hover:text-brand-tertiary transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-label-caps text-brand-tertiary mb-4 tracking-[0.14em]">LEGAL</p>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-nav text-brand-on-primary/70 hover:text-brand-tertiary transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-brand-on-primary/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-label-md text-brand-on-primary/50">
            © 2026 Cafe Miel Artisanal Bakery. Crafted for slow mornings.
          </p>
          <div className="flex items-center gap-5">
            {/* Instagram */}
            <a href="#" className="text-brand-on-primary/50 hover:text-brand-tertiary transition-colors" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            {/* Facebook */}
            <a href="#" className="text-brand-on-primary/50 hover:text-brand-tertiary transition-colors" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
