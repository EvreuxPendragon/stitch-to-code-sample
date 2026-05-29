import { Link } from 'react-router-dom'
import { ProductCard } from './ProductCard'

import espressoImg from '@/assets/images/espresso.png'
import cappuccinoImg from '@/assets/images/cappuccino.png'
import croissantImg from '@/assets/images/croissant.png'

const products = [
  {
    image: espressoImg,
    category: 'CAFÉ CALIENTE',
    title: 'Espresso Double',
    price: '$3.50',
    tag: 'Popular',
  },
  {
    image: cappuccinoImg,
    category: 'CAFÉ CALIENTE',
    title: 'Classic Cappuccino',
    price: '$4.50',
  },
  {
    image: croissantImg,
    category: 'REPOSTERÍA',
    title: 'Croissant Clásico',
    price: '$3.25',
    tag: 'Nuevo',
  },
  {
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=900&fit=crop',
    category: 'CAFÉ FRÍO',
    title: 'Pour Over',
    price: '$4.00',
  },
  {
    image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=600&h=900&fit=crop',
    category: 'REPOSTERÍA',
    title: 'Tarta de Limón',
    price: '$5.50',
    tag: 'Popular',
  },
  {
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&h=900&fit=crop',
    category: 'SNACKS',
    title: 'Galleta Choco-Nuez',
    price: '$2.75',
    tag: 'Gluten-Free',
  },
]

export function FavoritesGrid() {
  return (
    <section id="menu" className="section-spacing bg-brand-neutral">
      <div className="container-editorial">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-label-caps text-brand-tertiary tracking-[0.18em] mb-4 block">
            SELECCIONADOS PARA TI
          </span>
          <h2 className="text-display-lg text-brand-primary mb-4">
            Nuestros Favoritos
          </h2>
          <p className="text-body-lg text-brand-secondary max-w-md mx-auto">
            Seleccionados cuidadosamente para acompañar tus mañanas pausadas.
          </p>
        </div>

        {/* Product Grid — 3 columns desktop, 2 tablet, 1 mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {products.map((product) => (
            <ProductCard key={product.title} {...product} />
          ))}
        </div>

        {/* Browse All Link */}
        <div className="text-center mt-14">
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 text-label-caps text-brand-primary hover:text-brand-tertiary transition-colors duration-200 group"
          >
            VER MENÚ COMPLETO
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              <path d="M5 12h14"/>
              <path d="m12 5 7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

