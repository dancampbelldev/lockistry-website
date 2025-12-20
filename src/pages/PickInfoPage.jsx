import { useState, useEffect } from "react";
import lockPickData from "../assets/content/lockpick-types.json";
import vendorData from "../assets/content/lockpick-vendors.json";

import LockPickCard from "../components/LockPickCard";
import VendorCard from "../components/VendorCard";

// Import images
import hookPick from "../assets/images/picks/hook-pick.jpg";
import rakePick from "../assets/images/picks/rake-pick.jpg";
import diamondPick from "../assets/images/picks/diamond-pick.jpg";
import halfDiamondPick from "../assets/images/picks/half-diamond-pick.jpg";
import tensionWrench from "../assets/images/picks/tension-wrench.jpg";
import snakeRake from "../assets/images/picks/snake-rake.jpg";
import cityRake from "../assets/images/picks/city-rake.jpg";
import deepHookPick from "../assets/images/picks/deep-hook-pick.jpg";
import ballPick from "../assets/images/picks/ball-pick.jpg";

// Vendor logos
import sparrowsLogo from "../assets/images/vendors/sparrows.jpg";
import petersonLogo from "../assets/images/vendors/peterson.jpg";
import southOrdLogo from "../assets/images/vendors/southord.jpg";
import multipickLogo from "../assets/images/vendors/multipick.jpg";

// Map JSON keys → actual imported images
const imageMap = {
  hookPick,
  rakePick,
  diamondPick,
  halfDiamondPick,
  tensionWrench,
  snakeRake,
  cityRake,
  deepHookPick,
  ballPick
};

const vendorImageMap = {
  sparrowsLogo,
  petersonLogo,
  southOrdLogo,
  multipickLogo
};

function PickInfoPage() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  const picks = lockPickData.lockPickTypes.map(pick => ({
    ...pick,
    image: imageMap[pick.image] || null
  }));

  const vendors = vendorData.vendors.map(vendor => ({
    ...vendor,
    logo: vendorImageMap[vendor.logo] || null
  }));

  // Back to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="pt-[150px] min-h-screen bg-sky-950 text-stone-100">
      <main className="max-w-6xl mx-auto px-6 py-12 space-y-16">

        {/* Lock Pick Types */}
        <section>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 border-b-4 border-sky-600 pb-4">
            Types of Lock Picks
          </h1>

          <div className="text-center mb-10">
            <a
              href="#vendors-section"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("vendors-section")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-sky-400 underline hover:text-sky-300 transition-colors duration-300 cursor-pointer"
            >
              Scroll down to see where to buy lock picks
            </a>
          </div>

          <div className="flex flex-col items-center space-y-12">
            {picks.map((p, i) => (
              <LockPickCard
                key={i}
                image={p.image}
                title={p.title}
                text={p.text}
              />
            ))}
          </div>
        </section>

        {/* Lock Pick Vendors */}
        <section id="vendors-section">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 border-b-4 border-sky-600 pb-4">
            Where to Buy Lock Picks
          </h1>

          <div className="flex flex-col items-center space-y-12">
            {vendors.map((v, i) => (
              <VendorCard
                key={i}
                logo={v.logo}
                name={v.name}
                website={v.website}
                description={v.description}
              />
            ))}
          </div>
        </section>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 bg-sky-600 text-white px-4 py-2 rounded shadow-lg transition-opacity duration-500 ${
            showTopBtn ? "opacity-90" : "opacity-0 pointer-events-none"
          } hover:opacity-100 cursor-pointer`}
        >
          ↑ Back to Top
        </button>
      </main>
    </div>
  );
}

export default PickInfoPage;