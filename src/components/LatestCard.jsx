import { Link } from "react-router-dom";
import { postImages } from "../assets/imageMaps/postImages";

export default function LatestCard({ post, setActiveTag }) {
  const images = postImages[post.images.thumbnail];

  return (
    <Link to={post.route}>
      <article
        className="
          bg-sky-900/60
          border border-sky-800
          rounded-2xl
          overflow-hidden
          flex flex-col
          transition-all duration-300
          hover:bg-sky-900/80
          hover:border-sky-600
          hover:shadow-xl
          hover:shadow-black/30
        "
      >
        {images?.thumbnail && (
          <img
            src={images.thumbnail}
            alt={post.title}
            className="
              w-full h-48 object-cover
              brightness-90 contrast-95
              transition-all duration-300
              hover:brightness-100 hover:contrast-105
            "
          />
        )}

        <div className="p-6 flex flex-col flex-1 space-y-4">
          <div className="text-sm text-sky-400">
            {post.category} · {post.readTime}
          </div>

          <h2 className="text-2xl font-semibold leading-snug line-clamp-2 break-words">
            {post.title}
          </h2>

          <p className="text-stone-300 text-sm line-clamp-4 flex-1">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <button
                key={tag}
                onClick={(e) => {
                  e.preventDefault(); // stop card navigation
                  setActiveTag(tag);
                }}
                className="
                  cursor-pointer
                  text-xs
                  px-3 py-1
                  rounded-full
                  bg-sky-800/60
                  text-sky-300
                  hover:bg-sky-700
                  hover:text-sky-200
                  transition
                "
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}