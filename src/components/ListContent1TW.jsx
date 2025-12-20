function ListContent1TW({ data }) {
  if (!data || data.length === 0) {
    return <p className="text-white text-lg font-light">No content available.</p>;
  }

  return (
    <div className="space-y-12">
      {data.map((section, i) => (
        <section key={i} className="mb-10 bg-sky-900 p-6 rounded-lg shadow-lg">
          {/* Section Title with blue underline */}
          <h2 className="text-3xl md:text-3.5xl font-bold mb-4 border-b-2 border-sky-400 pb-2 text-white">
            {section.title}
          </h2>

          {/* Optional Image */}
          {section.image && (
            <img
              src={section.image}
              alt={section.title}
              className="my-6 w-full max-w-[900px] h-auto rounded shadow-md mx-auto"
            />
          )}

          {/* Section Content */}
          <div className="ml-4 text-white">
            {section.content.map((line, j) => {
              const trimmed = line.trim();

              if (trimmed.startsWith("- ")) {
                // Bullet points
                return <li key={j} className="list-disc ml-5">{trimmed.slice(2)}</li>;
              } else if (/^\d+\./.test(trimmed)) {
                // Numbered list: strip number from JSON, let <li> handle numbering
                return <li key={j} className="list-decimal ml-5 font-normal">{trimmed.replace(/^\d+\.\s*/, '')}</li>;
              } else if (trimmed.endsWith(":")) {
                // Lines ending with colon: bold, bigger, extra spacing above
                return <p key={j} className="mt-6 mb-2 font-semibold text-lg">{trimmed}</p>;
              } else {
                // Regular paragraph: increased size
                return <p key={j} className="mt-2 mb-2 font-light text-lg">{trimmed}</p>;
              }
            })}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ListContent1TW;