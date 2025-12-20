import { useMemo } from "react";
import { useNavigate, Link } from "react-router-dom";
import fbIcon from '../assets/images/icon-facebook-bw.png';
import instaIcon from '../assets/images/icon-instagram-bw.png';
import xIcon from '../assets/images/icon-x.png';
import posts from "../assets/content/latestPosts.json";
import { postImages } from "../assets/imageMaps/postImages";

function Footer({ logo }) {
  const navigate = useNavigate();

  // Get the most recent published article
  const latestArticle = useMemo(() => {
    const published = posts.filter(post => post.status === "published");
    return published.sort((a, b) => new Date(b.date) - new Date(a.date))[0];
  }, []);

  const latestImage = latestArticle
    ? postImages[latestArticle.images.thumbnail]?.thumbnail
    : null;

  const handleClick = () => {
    if (latestArticle) {
      navigate(latestArticle.route);
    }
  };

  return (
    <footer className="bg-sky-900 text-stone-100 py-12 flex flex-col items-center space-y-8">

      {/* Logo (internal link MUST use Link with HashRouter) */}
      <Link to="/">
        <img src={logo} alt="Site Logo" className="w-40 cursor-pointer" />
      </Link>

      {/* Tagline */}
      <div className="px-4 sm:px-6 md:px-0 max-w-3xl text-center">
        <p className="text-lg md:text-xl">
          Your Guide to Locks and Beyond
        </p>
      </div>

      {/* Latest Article Preview */}
      {latestArticle && (
        <div
          onClick={handleClick}
          className="
            cursor-pointer
            w-full max-w-4xl
            flex flex-col md:flex-row
            items-start md:items-center
            gap-4
            px-4 sm:px-6 py-6
            hover:bg-sky-800/80
            transition-colors duration-300
          "
        >
          <span className="text-xs text-sky-300 uppercase font-semibold">
            Latest Article
          </span>

          {latestImage && (
            <img
              src={latestImage}
              alt={latestArticle.title}
              className="w-full md:w-48 h-28 object-cover"
            />
          )}

          <div className="flex flex-col">
            <span className="text-sm text-sky-400 mb-1">
              {latestArticle.category}
            </span>
            <h3 className="text-lg font-semibold">
              {latestArticle.title}
            </h3>
          </div>
        </div>
      )}

      {/* Social Icons (external links stay <a>) */}
      <div className="flex gap-6 mt-4">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={fbIcon} alt="Facebook" className="w-8 h-8 hover:opacity-70 transition" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={instaIcon} alt="Instagram" className="w-8 h-8 hover:opacity-70 transition" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={xIcon} alt="X" className="w-8 h-8 hover:opacity-70 transition" />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-sm text-stone-400 mt-4 text-center px-4">
        © 2025 Lockistry. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;