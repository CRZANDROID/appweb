import logo from '../assets/img/logo-1.png'
import '../assets/style/header.css'
import Menu from "./HeaderParts/menu.jsx"

function Header() {
  return (
    <header>
      <div className='menu-completo'><img src={logo}></img>
        <Menu></Menu></div>
    </header>
  );
}
export default Header;
