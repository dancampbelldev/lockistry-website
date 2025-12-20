import { IoSearch, IoMenuOutline } from "react-icons/io5";
import { useState } from 'react';

{/* 
For parent component -

<TWNavMenu1 logo={mainLogo}
  textColor="text-white"
  hoverBtnColor="hover:bg-orange-800"
  hoverTextColor="hover:white"
  hoverBtnColorMob="hover:bg-orange-900"
  hoverTextColorMob="hover:text-gray-400"
  mobNavBackground="bg-orange-800"
/>
*/}

function TWNavMenu1(props) {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-99">
      <div className={`opacity-88 flex justify-between items-center ${props.textColor} py-6 px-8 md:px-32 bg-sky-900 drop-shadow-md min-h-[100px]`}>
        <a href="/"><img src={props.logo} alt="Lockistry" className="w-45 " /></a>
        <ul className="hidden lg:flex items-center gap-12 font-semibold text-base">
          <a href="/"><li className={`flex p-3 ${props.hoverBtnColor} ${props.hoverTextColor} rounded-md transition-all cursor-pointer duration-300`}>Home</li></a>
          <a href="/lockinfo"><li className={`flex p-3 ${props.hoverBtnColor} ${props.hoverTextColor} rounded-md transition-all cursor-pointer duration-300`}>Lock Types</li></a>
          <a href="/pickinfo"><li className={`flex p-3 ${props.hoverBtnColor} ${props.hoverTextColor} rounded-md transition-all cursor-pointer duration-300`}>Picks</li></a>
          <a href="/latest"><li className={`flex p-3 ${props.hoverBtnColor} ${props.hoverTextColor} rounded-md transition-all cursor-pointer duration-300`}>Latest</li></a>
        </ul>
      
      {/* 
      If want the search input -

      <div className="relative hidden md:flex items-center justify-center gap-3">
        <a className="absolute left-3 text-2xl"><IoSearch /></a>
        <input type="text" placeholder='Search...' className="py-2 pl-10 rounded-xl border-2 border-blue-300 focus:bg-slate-600 focus:outline-sky-500" />
      </div>
      */}

        <a className={`lg:hidden block text-5xl cursor-pointer duration-300 ${isMenuOpen ? "-rotate-45 scale-85 text-gray-300" : ""}`} 
        onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <IoMenuOutline />
        </a>
        </div>
        <div className={`absolute lg:hidden top-24 left-0 w-full ${props.textColor} ${props.mobNavBackground} flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform 
          ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`} 
          style={{transition: "transform 0.3s ease, opacity 0.3s ease"}}
        >

        <a href="/" className="w-full"><li className={`list-none w-full text-center p-4 ${props.hoverBtnColorMob} ${props.hoverTextColorMob} transition-all cursor-pointer duration-300`}>
          Home
        </li></a>
        <a href="/lockinfo" className="w-full"><li className={`list-none w-full text-center p-4 ${props.hoverBtnColorMob} ${props.hoverTextColorMob} transition-all cursor-pointer duration-300`}>
          Lock Types
        </li></a>
        <a href="/pickinfo" className="w-full"><li className={`list-none w-full text-center p-4 ${props.hoverBtnColorMob} ${props.hoverTextColorMob} transition-all cursor-pointer duration-300`}>
          Picks
        </li></a>
        <a href="/latest" className="w-full"><li className={`list-none w-full text-center p-4 ${props.hoverBtnColorMob} ${props.hoverTextColorMob} transition-all cursor-pointer duration-300`}>
          Latest
        </li></a>
      </div>
    </nav>
  )
}

export default TWNavMenu1