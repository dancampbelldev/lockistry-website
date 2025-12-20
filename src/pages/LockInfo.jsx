import { useParams } from "react-router-dom";
import lockData from "../assets/Content/lock-content-info.json";
import ListContent1TW from "../components/ListContent1TW";

// Import images
import pinTumblerImage1 from "../assets/images/pin-tumbler-1.jpg";
import pinTumblerImage2 from "../assets/images/pin-tumbler-2.jpg";
import pinTumblerImage3 from "../assets/images/pin-tumbler-3.jpg";

import waferTumblerImage1 from "../assets/images/wafer-tumbler-1.jpg";
import waferTumblerImage2 from "../assets/images/wafer-tumbler-2.jpg";
import waferTumblerImage3 from "../assets/images/wafer-tumbler-3.jpg";

import discDetainerImage1 from "../assets/images/disc-detainer-1.jpg";
import discDetainerImage2 from "../assets/images/disc-detainer-2.jpg";
import discDetainerImage3 from "../assets/images/disc-detainer-3.jpg";

import mortiseImage1 from "../assets/images/mortise-1.jpg";
import mortiseImage2 from "../assets/images/mortise-2.jpg";

import combinationLockImage1 from "../assets/images/combination-lock-1.jpg";
import combinationLockImage2 from "../assets/images/combination-lock-2.jpg";
import combinationLockImage3 from "../assets/images/combination-lock-3.jpg";

import electronicSmartLockImage1 from "../assets/images/electronic-smart-lock-1.jpg";
import electronicSmartLockImage2 from "../assets/images/electronic-smart-lock-2.jpg";
import electronicSmartLockImage3 from "../assets/images/electronic-smart-lock-3.jpg";

import magLockImage1 from "../assets/images/maglock-1.jpg";
import magLockImage2 from "../assets/images/maglock-2.jpg";
import magLockImage3 from "../assets/images/maglock-3.jpg";

import dimpleLockImage1 from "../assets/images/dimple-lock-1.jpg";
import dimpleLockImage2 from "../assets/images/dimple-lock-2.jpg";
import dimpleLockImage3 from "../assets/images/dimple-lock-3.jpg";

// Map strings from JSON to imported image variables
const imageMap = {
  pinTumblerImage1,
  pinTumblerImage2,
  pinTumblerImage3,
  discDetainerImage1,
  discDetainerImage2,
  discDetainerImage3,
  mortiseImage1,
  mortiseImage2,
  waferTumblerImage1,
  waferTumblerImage2,
  waferTumblerImage3,
  electronicSmartLockImage1,
  electronicSmartLockImage2,
  electronicSmartLockImage3,
  magLockImage1,
  magLockImage2,
  magLockImage3,
  combinationLockImage1,
  combinationLockImage2,
  combinationLockImage3,
  dimpleLockImage1,
  dimpleLockImage2,
  dimpleLockImage3
};

function LockInfo() {
  const { type } = useParams(); // e.g., "pinTumbler", "discDetainer", "mortise"
  const rawData = lockData[type];

  if (!rawData) {
    return (
      <div className="pt-[120px] flex justify-center items-center min-h-screen bg-sky-950">
        <p className="text-white text-xl font-semibold">
          This page is currently being built. Come back soon!
        </p>
      </div>
    );
  }

  // Map images from string keys in JSON to actual imports
  const data = rawData.map(section => ({
    ...section,
    image: section.image ? imageMap[section.image] : null
  }));

  // Capitalize type nicely for header
  const formattedType = type
    .replace(/([A-Z])/g, " $1") // add space before capital letters
    .replace(/^./, str => str.toUpperCase()); // capitalize first letter

  return (
    <div className="pt-[98px] min-h-screen bg-sky-950 text-stone-100">
      <main className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 border-b-4 border-sky-600 pb-4">
          {formattedType}
        </h1>

        <div className="space-y-12">
          <ListContent1TW data={data} />
        </div>
      </main>
    </div>
  );
}

export default LockInfo;