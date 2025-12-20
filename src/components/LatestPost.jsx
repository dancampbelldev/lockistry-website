import { useParams } from "react-router-dom";
import posts from "../assets/content/latestPosts.json";
import { postImages } from "../assets/imageMaps/postImages";

export default function LatestPost() {
  const { postId } = useParams();
  const post = posts.find(p => p.id === postId);

  if (!post) {
    return <div className="pt-[120px] text-center">Post not found.</div>;
  }

  const heroImage = postImages[post.images.hero]?.hero;

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
            <h2 className="text-2xl font-semibold">
              {section.heading}
            </h2>

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

      </div>
    </article>
  );
}