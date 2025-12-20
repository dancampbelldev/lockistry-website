import CircleRow1 from '../components/CircleRow1';
import TopTitleIntro from '../components/TopTitleIntro';
import TitleContentBasic1 from '../components/TitleContentBasic1';
import thmImage1 from '../assets/images/euro-small.jpg';
import thmImage2 from '../assets/images/wafer-small.jpg';
import thmImage3 from '../assets/images/discdetainer-small.jpg';
import thmImage4 from '../assets/images/mortise-small.jpg';
import thmImage5 from '../assets/images/smartlock-small.jpg';
import thmImage6 from '../assets/images/maglock-small.jpg';
import thmImage7 from '../assets/images/combination-small.jpg';
import thmImage8 from '../assets/images/misc-lock-small.jpg';


function LockInfoPage() {



  return (
    <div className="pt-[140px] bg-sky-950 border-b-2 border-sky-400 border-w">
      <TopTitleIntro title="Lock Types" paragragh="These are the main types of locks that you will find securing doors and containers" />
      <CircleRow1 
      image1={thmImage1} title1="Pin Tumbler" href1="/locks/pinTumbler"
      image2={thmImage2} title2="Wafer Tumbler" href2="/locks/waferTumbler"
      image3={thmImage3} title3="Disc Detainer" href3="/locks/discDetainer"
      image4={thmImage4} title4="Mortise" href4="/locks/mortise"
       />
      <CircleRow1 
      image1={thmImage5} title1="Electronic/Smart" href1="/locks/electronicSmartLocks"
      image2={thmImage6} title2="Maglocks" href2="/locks/magLock"
      image3={thmImage7} title3="Combination" href3="/locks/combinationLock"
      image4={thmImage8} title4="Dimple" href4="/locks/dimpleLock"
      />
      <TitleContentBasic1
      title="Pin Tumbler Locks"
      content="Pin tumbler locks are the most common type of lock mechanism used in residential and commercial buildings. They operate by using a key that lifts a series of spring-loaded pins to precise heights so the lock’s plug can rotate. This design provides dependable everyday security and supports many enhanced cylinders. Pin tumblers are widely used on doors and padlocks because they are reliable, easy to standardize, and compatible with many manufacturers. For locksmiths, they are generally considered moderately easy to pick with the right tools and experience, although high-security pin systems with spool or serrated pins can significantly increase difficulty."
      bgcolor="bg-sky-900"
      />
      <TitleContentBasic1
      title="Wafer Tumbler Locks"
      content="Wafer tumbler locks use flat wafers instead of round pins. When the correct key is inserted, the wafers align to a neutral position that allows the lock to turn. They tend to be inexpensive and compact, which makes them popular in automotive locks, cabinets, desks, and other low-security applications. Their simplicity is a major advantage for manufacturing and installation, but it also makes them less resistant to picking or manipulation. Most locksmiths consider wafer locks fairly easy to pick due to their simple internal layout and fewer security features."
      bgcolor="bg-sky-800"
      />
      <TitleContentBasic1
      title="Disc Detainer Locks"
      content="Disc detainer locks use a series of rotating discs that must be turned to the correct angles by a specially cut key. When the discs are aligned, small gate openings line up to allow a sidebar to drop in, enabling the lock to rotate. This system provides strong resistance to environmental wear, dirt, and traditional picking. Disc detainer mechanisms are known for their durability and are commonly found in higher-security padlocks, bike locks, and outdoor security devices. For locksmiths, these locks range from difficult to very difficult to pick, often requiring specialized disc detainer tools and significant skill."
      bgcolor="bg-sky-900"
      />
      <TitleContentBasic1
      title="Mortise Locks"
      content="Mortise locks are heavy-duty locks installed inside a mortise pocket cut into the door. They can incorporate various internal mechanisms such as cylinders or lever systems, depending on the design. Mortise locks are known for their strength, durability, and suitability for high-traffic environments. They are typically used in commercial buildings, shops, and older or higher-end residential properties. From a locksmith’s perspective, the difficulty of picking a mortise lock depends entirely on the cylinder type fitted to it. Standard mortise cylinders with pin tumblers are moderately difficult, while upgraded security cylinders installed in mortise housings can be much harder."
      bgcolor="bg-sky-900"
      />
      <TitleContentBasic1
      title="Electronic or Smart Lock Mechanisms"
      content="Electronic and smart locks rely on digital credentials rather than mechanical pins. They may use keypads, RFID cards, Bluetooth, Wi-Fi, or biometric input to grant access. Internally, many models still include a mechanical override cylinder, but the primary operation is electronic. Their advantages include convenience, remote management, access logs, and programmable user permissions. They are widely used in homes, offices, rental properties, and controlled-access buildings. For locksmiths, picking difficulty varies: the electronic portion cannot be “picked” traditionally, but if a mechanical backup cylinder is present, its difficulty depends on that cylinder’s design. Some smart locks use very basic cylinders, while high-end models use advanced, pick-resistant cores."
      bgcolor="bg-sky-800"
      />
      <TitleContentBasic1
      title="Magnetic Locks (Maglocks)"
      content="Maglocks operate using a powerful electromagnet mounted on the door frame and a metal armature plate mounted on the door. When powered, the magnet holds the plate with strong force, locking the door. When power is cut—either by an access system or in emergencies—the door is released. Maglocks offer high holding strength, simple installation, and reliable operation with very few moving parts. They are mainly used in commercial buildings, secure internal doors, and areas managed by access-control systems. Because maglocks do not use a mechanical keyway, they cannot be picked at all in the traditional sense. Instead, bypass methods involve electrical control systems rather than manipulation of lock components."
      bgcolor="bg-sky-900"
      />
      <TitleContentBasic1
      title="Combination Locks"
      content="Combination locks work by aligning internal wheels or discs to a specific sequence of numbers or symbols. When the correct combination is entered, all wheels line up at their gate positions, allowing the locking mechanism to retract. Combination locks remove the need for keys and are commonly used on safes, personal padlocks, gym lockers, and storage units. Their advantages include ease of use and no risk of key loss. For locksmiths, the difficulty of “picking” a combination lock varies widely. Simple dial or luggage-style combination locks are relatively easy to decode or manipulate, while high-security safe locks can be very challenging and require specialized safe-cracking skills."
      bgcolor="bg-sky-800"
      />
      <TitleContentBasic1
      title="Dimple Locks"
      content="Dimple locks use a key with small, precisely positioned dimples instead of traditional edge cuts, allowing the lock to support more complex pin arrangements and tighter tolerances. The pins are typically arranged radially or at varying angles within the cylinder, which increases resistance to casual manipulation and makes visual decoding more difficult. Dimple locks are commonly found in higher-quality residential and commercial hardware, particularly in European-style cylinders. From a locksmithing and locksport perspective, they require specialised picks and a refined understanding of feedback, as pin movement is less linear and often subtler than in standard pin tumbler systems. When well-made, dimple locks offer a strong balance between everyday usability and enhanced mechanical security."
      bgcolor="bg-sky-900"
      />
    </div>
  )
}

export default LockInfoPage