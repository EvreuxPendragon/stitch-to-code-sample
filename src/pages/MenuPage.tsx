import { useState } from 'react'
import { ProductCard } from '@/components/ProductCard'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

const CATEGORIES = ['TODOS', 'CAFÉ CALIENTE', 'CAFÉ FRÍO', 'REPOSTERÍA', 'TÉS', 'SNACKS']

const menuItems = [
  {
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&h=900&fit=crop',
    category: 'CAFÉ CALIENTE',
    title: 'Espresso Double',
    price: '$3.50',
    tag: 'Popular',
  },
  {
    image: 'https://images.unsplash.com/photo-1534687941688-651ccaafbff8?w=600&h=900&fit=crop',
    category: 'CAFÉ CALIENTE',
    title: 'Classic Cappuccino',
    price: '$4.50',
  },
  {
    image: 'https://images.unsplash.com/photo-1582312686737-56457199ecb9?w=600&h=900&fit=crop',
    category: 'CAFÉ CALIENTE',
    title: 'Flat White',
    price: '$4.25',
  },
  {
    image: 'https://images.unsplash.com/photo-1461023058943-07cb1ce8e1dc?w=600&h=900&fit=crop',
    category: 'CAFÉ FRÍO',
    title: 'Cold Brew Clásico',
    price: '$4.75',
    tag: 'Refrescante',
  },
  {
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=900&fit=crop',
    category: 'CAFÉ FRÍO',
    title: 'Iced Latte',
    price: '$4.50',
  },
  {
    image: 'https://images.unsplash.com/photo-1555507015-fa01844243b7?w=600&h=900&fit=crop',
    category: 'REPOSTERÍA',
    title: 'Croissant Clásico',
    price: '$3.25',
    tag: 'Nuevo',
  },
  {
    image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=600&h=900&fit=crop',
    category: 'REPOSTERÍA',
    title: 'Tarta de Limón',
    price: '$5.50',
    tag: 'Popular',
  },
  {
    image: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=600&h=900&fit=crop',
    category: 'REPOSTERÍA',
    title: 'Pan de Chocolate',
    price: '$3.75',
  },
  {
    image: 'https://images.unsplash.com/photo-1515823662415-e0fac0aa27f5?w=600&h=900&fit=crop',
    category: 'TÉS',
    title: 'Té Verde Matcha',
    price: '$4.50',
  },
  {
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&h=900&fit=crop',
    category: 'TÉS',
    title: 'Chai Latte',
    price: '$4.75',
    tag: 'Especial',
  },
  {
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&h=900&fit=crop',
    category: 'SNACKS',
    title: 'Galleta Choco-Nuez',
    price: '$2.75',
    tag: 'Gluten-Free',
  },
  {
    image: 'https://images.unsplash.com/photo-1484723091791-0fee59cb0c47?w=600&h=900&fit=crop',
    category: 'SNACKS',
    title: 'Granola con Yogurt',
    price: '$6.00',
  },
]

export function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('TODOS')

  const filteredItems = activeCategory === 'TODOS'
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory)

  return (
    <div className="min-h-screen bg-brand-neutral pt-24">
      <Navbar />
      
      <main className="container-editorial py-16">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-label-caps text-brand-tertiary tracking-[0.18em] mb-4 block">
            NUESTRA OFERTA
          </span>
          <h1 className="text-display-xl text-brand-primary mb-6">
            El Menú
          </h1>
          <p className="text-body-lg text-brand-secondary max-w-2xl mx-auto">
            Explora nuestra selección completa de cafés de especialidad, tés y repostería artesanal.
            Añade tus favoritos al carrito para recoger en tienda.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fade-up delay-100">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-label-caps transition-colors duration-200 cursor-pointer ${
                activeCategory === category
                  ? 'bg-brand-primary text-brand-on-primary'
                  : 'bg-transparent text-brand-primary hover:text-brand-tertiary border border-brand-border'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12 animate-fade-up delay-200">
          {filteredItems.map((item) => (
            <ProductCard key={item.title} {...item} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
