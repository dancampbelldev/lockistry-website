import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import posts from "../assets/content/latestPosts.json";
import LatestCard from "../components/LatestCard";
import LatestFilterBar from "../components/LatestFilterBar";

export default function LatestPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [activeCategory, setActiveCategory] = useState("All");
  const [activeTag, setActiveTag] = useState(null);

  // Read filters from URL on load / change
  useEffect(() => {
    const category = searchParams.get("category");
    const tag = searchParams.get("tag");

    if (category) setActiveCategory(category);
    if (tag) setActiveTag(tag);
  }, [searchParams]);

  // Sync filters to URL
  useEffect(() => {
    const params = {};

    if (activeCategory && activeCategory !== "All") {
      params.category = activeCategory;
    }

    if (activeTag) {
      params.tag = activeTag;
    }

    setSearchParams(params);
  }, [activeCategory, activeTag, setSearchParams]);

  const filteredPosts = posts
    .filter(post => {
      const categoryMatch =
        activeCategory === "All" || post.category === activeCategory;

      const tagMatch =
        !activeTag || post.tags.includes(activeTag);

      return categoryMatch && tagMatch && post.status === "published";
    })
    .sort((a, b) => {
      const dateA = new Date(a.date).getTime() || 0;
      const dateB = new Date(b.date).getTime() || 0;
      return dateB - dateA; // newest first
    });

  return (
    <div className="pt-[150px] min-h-screen bg-sky-950 text-stone-100">
      <main className="max-w-6xl mx-auto px-6 py-12 space-y-12">

        <h1 className="text-4xl md:text-5xl font-bold border-b-4 border-sky-600 pb-4">
          Latest Articles
        </h1>

        {/* Filter Bar */}
        <LatestFilterBar
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          activeTag={activeTag}
          setActiveTag={setActiveTag}
        />

        {/* Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map(post => (
            <LatestCard key={post.id} post={post} />
          ))}
        </div>

      </main>
    </div>
  );
}