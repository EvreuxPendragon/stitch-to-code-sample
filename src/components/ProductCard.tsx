interface ProductCardProps {
  image: string
  category: string
  title: string
  price: string
  tag?: string
}

export function ProductCard({ image, category, title, price, tag }: ProductCardProps) {
  return (
    <article className="group cursor-pointer">
      {/* Image — 2:3 portrait ratio, no border-radius */}
      <div className="relative aspect-[2/3] overflow-hidden bg-brand-surface-tint mb-3">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />

        {/* Tag badge */}
        {tag && (
          <span className="absolute top-3 left-3 bg-brand-surface text-brand-tertiary text-label-caps px-3 py-1.5 rounded-full">
            {tag}
          </span>
        )}

        {/* Add to cart button */}
        <button
          className="absolute bottom-3 right-3 w-10 h-10 bg-brand-primary text-brand-on-primary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-brand-tertiary cursor-pointer shadow-[0_2px_8px_rgba(42,33,24,0.15)]"
          aria-label={`Add ${title} to cart`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"/>
            <line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
        </button>
      </div>

      {/* Category label */}
      <span className="text-label-caps text-brand-tertiary block mb-1.5">
        {category}
      </span>

      {/* Title */}
      <h4 className="text-headline-sm text-brand-primary group-hover:text-brand-tertiary transition-colors duration-200 mb-1">
        {title}
      </h4>

      {/* Price */}
      <span className="text-body-md text-brand-secondary">
        {price}
      </span>
    </article>
  )
}
