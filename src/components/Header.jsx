import mainLogo from '../assets/images/lockistry-logo-white.png';
import TWNavMenu1 from './TWNavMenu1';

function Header() {



  return (
    <header>
      <TWNavMenu1 logo={mainLogo}
        textColor="text-white"
        hoverBtnColor="hover:bg-sky-800"
        hoverTextColor="hover:text-gray-400"
        hoverBtnColorMob="hover:bg-sky-600"
        hoverTextColorMob="hover:text-gray-400"
        mobNavBackground="bg-sky-700"
      />
    </header>
  )
}

export default Header