import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import posts from "../assets/content/latestPosts.json";
import { postImages } from "../assets/imageMaps/postImages";

export default function LatestPost() {
  const { postId } = useParams();
  const post = posts.find(p => p.id === postId);

  // Build a "you may also like" suggestion (category-first random)
  const recommendedPost = useMemo(() => {
    if (!post) return null;

    const published = posts.filter(
      p => p.status === "published" && p.id !== post.id
    );

    if (published.length === 0) return null;

    const sameCategory = published.filter(p => p.category === post.category);
    const pool = sameCategory.length > 0 ? sameCategory : published;

    const index = Math.floor(Math.random() * pool.length);
    return pool[index] ?? null;
  }, [postId, post]);

  if (!post) {
    return <div className="pt-[120px] text-center">Post not found.</div>;
  }

  const heroImage = postImages[post.images.hero]?.hero;

  const recommendedThumb =
    recommendedPost?.images?.thumbnail
      ? postImages[recommendedPost.images.thumbnail]?.thumbnail
      : null;

  return (
    <article className="pt-[98px] min-h-screen bg-sky-950 text-stone-100">
      <div className="max-w-3xl mx-auto px-6 py-12 space-y-12">
        {heroImage && (
          <img
            src={heroImage}
            alt={post.title}
            className="w-full rounded-2xl mb-6"
          />
        )}

        <header className="space-y-4">
          <h1 className="text-4xl font-bold">{post.title}</h1>
          <div className="text-sm text-sky-400">
            {post.author} · {post.date} · {post.readTime}
          </div>
        </header>

        {post.content.sections.map((section, index) => (
          <section key={index} className="space-y-4">
            <h2 className="text-2xl font-semibold">{section.heading}</h2>

            {section.body.map((paragraph, i) => (
              <p key={i} className="text-stone-300 leading-relaxed">
                {paragraph}
              </p>
            ))}

            {section.image && (
              <img
                src={postImages[section.image.key]?.[section.image.type]}
                alt=""
                className="w-full rounded-xl my-6"
              />
            )}
          </section>
        ))}

        {/* Recommended post */}
        {recommendedPost && (
          <aside className="
            mt-12 rounded-2xl bg-sky-900/20 border border-sky-800/40 p-6">
            <h3 className="relative pl-3 border-l-2 border-sky-500 mb-4 text-lg font-semibold text-stone-100">
              <span
                className="absolute left-0 top-0 h-full w-0.5 bg-sky-500 motion-safe:animate-accent-fade"
                aria-hidden="true"
              />
              Related reading
            </h3>

            <Link
              to={recommendedPost.route}
              className="block rounded-2xl bg-sky-900/30 hover:bg-sky-900/45 transition p-5"
            >
              <div className="flex gap-4 items-start">
                {recommendedThumb && (
                  <img
                    src={recommendedThumb}
                    alt=""
                    className="w-24 h-24 object-cover rounded-xl shrink-0"
                  />
                )}

                <div className="space-y-2">
                  <div className="text-sm text-sky-400">
                    {recommendedPost.category} · {recommendedPost.readTime}
                  </div>
                  <div className="text-xl font-semibold">
                    {recommendedPost.title}
                  </div>
                  {recommendedPost.excerpt && (
                    <p className="text-stone-300 leading-relaxed">
                      {recommendedPost.excerpt}
                    </p>
                  )}
                </div>
              </div>
            </Link>
          </aside>
        )}
      </div>
    </article>
  );
}