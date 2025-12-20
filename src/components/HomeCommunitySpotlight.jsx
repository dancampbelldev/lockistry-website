export default function HomeCommunitySpotlight({ items, imageMap }) {
  return (
    <section className="bg-sky-950 text-stone-100 py-20">
      <div className="max-w-6xl mx-auto px-6 space-y-14">

        {/* Header */}
        <div className="text-center space-y-5">
          <h2 className="text-3xl md:text-4xl font-bold border-b-2 border-sky-600 inline-block pb-2">
            Community & Knowledge
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-stone-300 leading-relaxed">
            Explore the wider world of locksport, education, and professional
            locksmithing through trusted community resources.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {items.map(item => (
            <article
              key={item.id}
              className="
                group
                bg-sky-900/60
                border border-sky-800
                rounded-2xl
                overflow-hidden
                flex flex-col
                transition-all
                duration-300
                hover:bg-sky-900/80
                hover:border-sky-600
                hover:shadow-xl
                hover:shadow-black/30
              "
            >
              {/* Image */}
              <img
                src={imageMap[item.imageKey]}
                alt={item.title}
                className="
                  w-full
                  h-[220px]
                  object-cover
                  brightness-90
                  contrast-95
                  transition-all
                  duration-300
                  group-hover:brightness-100
                  group-hover:contrast-105
                "
              />

              {/* Content */}
              <div className="p-7 flex flex-col flex-1 space-y-5">
                <h3 className="text-2xl font-semibold leading-snug">
                  {item.title}
                </h3>

                <p className="text-base text-stone-300 leading-relaxed flex-1">
                  {item.description}
                </p>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    text-base
                    font-medium
                    text-sky-400
                    transition
                    group-hover:text-sky-300
                  "
                >
                  <span className="border-b border-transparent group-hover:border-sky-400 transition">
                    {item.linkLabel}
                  </span>
                  <span className="ml-1">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}