import { useState, useEffect, useCallback } from 'react'

const testimonials = [
  {
    quote: '"El ambiente en Cafe Miel te obliga a bajar el ritmo. Su croissant de almendras es, sin exagerar, el mejor que he probado en la ciudad. Un refugio perfecto para las mañanas de fin de semana."',
    name: 'Sofía R.',
    role: 'Cliente Frecuente',
    rating: 5,
  },
  {
    quote: '"Descubrí Cafe Miel por casualidad y ahora es mi ritual de cada domingo. El pour-over de origen guatemalteco es extraordinario — y el pan de masa madre, incomparable."',
    name: 'Andrés M.',
    role: 'Amante del Café',
    rating: 5,
  },
  {
    quote: '"Cada visita es una experiencia completa. Desde el aroma al entrar hasta la presentación de cada plato. Este lugar entiende lo que significa la calidad artesanal."',
    name: 'Elena G.',
    role: 'Repostera Amateur',
    rating: 5,
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-brand-accent-rose"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  )
}

export function TestimonialSection() {
  const [current, setCurrent] = useState(0)
  const [visible, setVisible] = useState(true)

  const goTo = useCallback((index: number) => {
    setVisible(false)
    setTimeout(() => {
      setCurrent(index)
      setVisible(true)
    }, 250)
  }, [])

  const next = useCallback(() => {
    goTo((current + 1) % testimonials.length)
  }, [current, goTo])

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  const t = testimonials[current]

  return (
    <section className="section-spacing bg-brand-neutral">
      <div className="container-editorial max-w-3xl text-center">
        <span className="text-label-caps text-brand-tertiary tracking-[0.18em] mb-8 block">
          LO QUE DICEN NUESTROS CLIENTES
        </span>

        <div
          className="transition-opacity duration-250"
          style={{ opacity: visible ? 1 : 0 }}
        >
          {/* Quote */}
          <blockquote className="mb-8">
            <p className="font-display text-2xl md:text-[1.75rem] italic text-brand-primary leading-relaxed font-normal">
              {t.quote}
            </p>
          </blockquote>

          {/* Rating */}
          <div className="flex justify-center mb-4">
            <StarRating count={t.rating} />
          </div>

          {/* Author */}
          <div>
            <p className="text-label-caps text-brand-primary mb-1">
              {t.name}
            </p>
            <p className="text-label-md text-brand-secondary">
              {t.role}
            </p>
          </div>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-3 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                i === current
                  ? 'bg-brand-tertiary w-6'
                  : 'bg-brand-border hover:bg-brand-secondary w-2'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
