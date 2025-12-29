import { IoSearch, IoMenuOutline } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";

/*
For parent component -

<TWNavMenu1
  logo={mainLogo}
  textColor="text-white"
  hoverBtnColor="hover:bg-orange-800"
  hoverTextColor="hover:white"
  hoverBtnColorMob="hover:bg-orange-900"
  hoverTextColorMob="hover:text-gray-400"
  mobNavBackground="bg-orange-800"
/>
*/

function TWNavMenu1(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div
        className={`opacity-88 flex justify-between items-center ${props.textColor} py-6 px-8 md:px-32 bg-sky-900 drop-shadow-md min-h-[100px]`}
      >
        {/* Logo */}
        <Link to="/">
          <img src={props.logo} alt="Lockistry" className="w-45 cursor-pointer" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-12 font-semibold text-base">
          <li>
            <Link
              to="/"
              className={`flex p-3 ${props.hoverBtnColor} ${props.hoverTextColor} rounded-md transition-all cursor-pointer duration-300`}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/lockinfo"
              className={`flex p-3 ${props.hoverBtnColor} ${props.hoverTextColor} rounded-md transition-all cursor-pointer duration-300`}
            >
              Lock Types
            </Link>
          </li>

          <li>
            <Link
              to="/pickinfo"
              className={`flex p-3 ${props.hoverBtnColor} ${props.hoverTextColor} rounded-md transition-all cursor-pointer duration-300`}
            >
              Picks
            </Link>
          </li>

          <li>
            <Link
              to="/latest"
              className={`flex p-3 ${props.hoverBtnColor} ${props.hoverTextColor} rounded-md transition-all cursor-pointer duration-300`}
            >
              Latest
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className={`lg:hidden block text-5xl cursor-pointer duration-300 ${
            isMenuOpen ? "-rotate-45 scale-85 text-gray-300" : ""
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <IoMenuOutline />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute lg:hidden top-28 left-0 w-full ${props.textColor} ${props.mobNavBackground}
        flex flex-col items-center gap-6 font-semibold text-lg transition-all
        ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        style={{ transition: "opacity 0.3s ease" }}
      >
        <Link to="/" className="w-full" onClick={() => setIsMenuOpen(false)}>
          <div
            className={`w-full text-center p-4 ${props.hoverBtnColorMob} ${props.hoverTextColorMob} transition-all cursor-pointer duration-300`}
          >
            Home
          </div>
        </Link>

        <Link to="/lockinfo" className="w-full" onClick={() => setIsMenuOpen(false)}>
          <div
            className={`w-full text-center p-4 ${props.hoverBtnColorMob} ${props.hoverTextColorMob} transition-all cursor-pointer duration-300`}
          >
            Lock Types
          </div>
        </Link>

        <Link to="/pickinfo" className="w-full" onClick={() => setIsMenuOpen(false)}>
          <div
            className={`w-full text-center p-4 ${props.hoverBtnColorMob} ${props.hoverTextColorMob} transition-all cursor-pointer duration-300`}
          >
            Picks
          </div>
        </Link>

        <Link to="/latest" className="w-full" onClick={() => setIsMenuOpen(false)}>
          <div
            className={`w-full text-center p-4 ${props.hoverBtnColorMob} ${props.hoverTextColorMob} transition-all cursor-pointer duration-300`}
          >
            Latest
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default TWNavMenu1;