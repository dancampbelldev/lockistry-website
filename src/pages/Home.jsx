import TWHeaderParallax1 from "../components/TWHeaderParallax1";
import TWColumnTRIL from "../components/TWColumnTRIL";
import HomeCommunitySpotlight from "../components/HomeCommunitySpotlight";

// Images
import mainImage from "../assets/images/lock-main1.jpg";
import tRILImage from "../assets/images/master-lock1.jpg";

// Community images
import community1 from "../assets/images/community/community1.jpg";
import community2 from "../assets/images/community/community2.jpg";
import community3 from "../assets/images/community/community3.jpg";
import community4 from "../assets/images/community/community4.jpg";

// Content
import communitySpotlight from "../assets/content/communitySpotlight.json";

function Home() {
  // Image map (React-safe)
  const communityImageMap = {
    community1,
    community2,
    community3,
    community4
  };

  return (
    <div>
      <TWHeaderParallax1
        image={mainImage}
        title="Lockistry"
        tagline="Your Guide to Locks and Beyond"
      />

      <TWColumnTRIL
        image={tRILImage}
        title="Welcome to the World of Locksmithing"
        paragraph1="Locksmithing is one of the oldest technical trades in human history, rooted in the fundamental need to secure spaces, protect possessions, and control access. From early wooden pin locks to the finely engineered mechanisms found in modern cylinders, safes, and access systems, the craft has continually evolved alongside society itself. At its heart, locksmithing is a study of mechanical logic: how components interact, how tolerances affect movement, and how design choices balance security with usability. This combination of engineering, precision, and problem-solving is what makes locksmithing both technically demanding and endlessly fascinating to those who study it."
        paragraph2="In the modern world, locksmithing extends far beyond traditional keys and cylinders. Contemporary locksmiths and enthusiasts engage with a wide spectrum of technologies, including high-security mechanical locks, electronic access control, smart locks, automotive systems, and forensic analysis of lock failures. At the same time, the growing locksport community has helped demystify locks by approaching them as objects of learning rather than barriers to defeat. Whether approached professionally or as a disciplined hobby, locksmithing rewards patience, observation, and an understanding of how small mechanical details influence the behaviour of an entire system. It is a field where learning never truly ends, and where curiosity is as valuable as technical skill."
      />

      <HomeCommunitySpotlight
        items={communitySpotlight}
        imageMap={communityImageMap}
      />
    </div>
  );
}

export default Home;