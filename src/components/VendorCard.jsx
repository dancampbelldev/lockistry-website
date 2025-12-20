

function VendorCard({ logo, name, website, description }) {
  return (
    <div className="bg-sky-900 p-6 rounded-lg shadow-lg max-w-xl mx-auto hover:shadow-2xl transition-shadow duration-300">
      
      {/* Vendor Logo as Link */}
      {logo && (
        <div className="w-full max-w-[300px] mx-auto overflow-hidden rounded mb-4">
          <a href={website} target="_blank" rel="noopener noreferrer">
            <img
              src={logo}
              alt={name}
              className="w-full h-auto object-contain transform transition-transform duration-300 hover:scale-105"
            />
          </a>
        </div>
      )}

      {/* Vendor Name */}
      <h3 className="text-2xl font-bold text-white mb-2 text-center">{name}</h3>

      {/* Vendor Website Text Link */}
      <a
        href={website}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sky-400 hover:text-sky-300 mb-4 block text-center"
      >
        Visit Website
      </a>

      {/* Description */}
      <p className="text-stone-200 text-lg font-light leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default VendorCard;