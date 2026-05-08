import storyImage from '@/assets/images/story-bakery.png'

export function StorySection() {
  return (
    <section id="story" className="section-spacing bg-brand-surface-tint">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative overflow-hidden">
            <img
              src={storyImage}
              alt="Baker crafting artisan bread at Cafe Miel"
              className="w-full aspect-[4/5] object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="lg:pl-8">
            <span className="text-label-caps text-brand-tertiary tracking-[0.18em] mb-5 block">
              NUESTRA HISTORIA
            </span>

            <h2 className="text-display-lg text-brand-primary mb-8">
              <em className="italic font-normal">el arte de lo pausado.</em>
            </h2>

            <div className="space-y-5">
              <p className="text-body-lg text-brand-primary leading-relaxed">
                En Cafe Miel, creemos que las mejores cosas toman tiempo. Nuestra panadería nació de la pasión por los procesos lentos y los ingredientes honestos.
              </p>
              <p className="text-body-md text-brand-secondary leading-relaxed">
                Cada pan, cada taza de café, es una invitación a detenerse y disfrutar el momento presente. Seleccionamos nuestros granos y harinas de productores locales que comparten nuestro respeto por la tierra y la tradición.
              </p>
            </div>

            <a
              href="#story"
              className="inline-flex items-center gap-2 text-label-caps text-brand-primary hover:text-brand-tertiary transition-colors duration-200 mt-10 group"
            >
              LEER NUESTRA HISTORIA
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
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
