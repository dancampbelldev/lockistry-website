export default function LatestFilterBar({
  activeCategory,
  setActiveCategory,
  activeTag,
  setActiveTag
}) {
  const categories = [
    "All",
    "Lock Picking",
    "Lock Design",
    "Security Claims",
    "Mindset",
    "Tool Design",
    "Legal & Ethics",
    "Myth Busting"
  ];

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {categories.map(category => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`cursor-pointer px-3 py-1 rounded-full text-xs transition
            ${
              activeCategory === category
                ? "bg-sky-700 text-sky-100"
                : "bg-sky-800/60 text-sky-300 hover:bg-sky-700 hover:text-sky-100"
            }`}
        >
          {category}
        </button>
      ))}

      {activeTag && (
        <button
          onClick={() => setActiveTag(null)}
          className="cursor-pointer px-3 py-1 rounded-full text-xs bg-stone-800 border border-stone-600 text-stone-300 hover:bg-stone-700 hover:text-stone-100 transition"
        >
          Clear tag: #{activeTag}
        </button>
      )}
    </div>
  );
}