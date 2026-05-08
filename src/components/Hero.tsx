import heroImage from '@/assets/images/hero-bakery.png'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Interior of Cafe Miel bakery"
          className="w-full h-full object-cover"
        />
        {/* Warm overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2A2118]/40 via-[#2A2118]/25 to-[#2A2118]/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
        <span className="text-label-caps text-brand-accent-rose tracking-[0.2em] mb-6 block opacity-0 animate-fade-up delay-100">
          PANADERÍA ARTESANAL & CAFÉ
        </span>

        <h1 className="text-display-xl text-white mb-6 opacity-0 animate-fade-up delay-200">
          Café artesanal para tus momentos favoritos
        </h1>

        <p className="text-body-lg text-white/80 mb-10 max-w-xl mx-auto opacity-0 animate-fade-up delay-300">
          Horneado lentamente, preparado con intención. Cada taza y cada pan son una invitación a detenerte.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up delay-400">
          <a
            href="#menu"
            className="inline-flex items-center justify-center bg-brand-primary text-brand-on-primary hover:bg-brand-tertiary text-label-caps rounded-full px-8 py-4 transition-colors duration-200 cursor-pointer"
          >
            ORDENAR AHORA
          </a>
          <a
            href="#menu"
            className="inline-flex items-center gap-2 text-label-caps text-white hover:text-brand-accent-rose transition-colors duration-200 border border-white/30 hover:border-brand-accent-rose rounded-full px-8 py-4"
          >
            VER MENÚ
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"/>
              <path d="m12 5 7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom fade to neutral background */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-neutral to-transparent" />
    </section>
  )
}
