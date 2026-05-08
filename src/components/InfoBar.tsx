export function InfoBar() {
  return (
    <section id="contact" className="bg-brand-surface-tint py-16">
      <div className="container-editorial">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 items-center">
          <div className="flex items-start gap-4 justify-center md:justify-start">
            <div className="w-10 h-10 rounded-full bg-brand-primary text-brand-on-primary flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div>
              <p className="text-label-caps text-brand-tertiary mb-1.5">UBICACIÓN</p>
              <p className="text-body-md text-brand-primary">123 Calle del Sol, Barrio Antiguo</p>
            </div>
          </div>
          <div className="flex items-start gap-4 justify-center">
            <div className="w-10 h-10 rounded-full bg-brand-primary text-brand-on-primary flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <div>
              <p className="text-label-caps text-brand-tertiary mb-1.5">HORARIO</p>
              <p className="text-body-md text-brand-primary">Mar – Dom: 8:00 AM – 4:00 PM</p>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-end gap-3">
            <p className="text-label-caps text-brand-tertiary mb-1">¿PREGUNTAS?</p>
            <a href="#contact" className="inline-flex items-center justify-center bg-brand-primary text-brand-on-primary hover:bg-brand-tertiary text-label-caps rounded-full px-8 py-3.5 transition-colors duration-200 cursor-pointer">
              CONTÁCTANOS
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
