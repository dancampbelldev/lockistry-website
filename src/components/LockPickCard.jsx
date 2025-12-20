

function LockPickCard({ image, title, text }) {
  const paragraphs = text.split(/\n+/);

  return (
    <div className="bg-sky-900 p-8 rounded-2xl shadow-xl max-w-3xl w-full mx-auto overflow-hidden transition-shadow duration-300 hover:shadow-2xl">
      <div className="overflow-hidden rounded-lg mb-6">
        <img
          src={image}
          alt={title}
          className="w-full h-auto transition-transform duration-300 transform hover:scale-105"
        />
      </div>

      <h3 className="text-3xl font-bold text-white mb-6">
        {title}
      </h3>

      <div className="space-y-5">
        {paragraphs.map((para, i) => (
          <p
            key={i}
            className="text-stone-200 text-xl font-light leading-relaxed"
          >
            {para.trim()}
          </p>
        ))}
      </div>
    </div>
  );
}

export default LockPickCard;