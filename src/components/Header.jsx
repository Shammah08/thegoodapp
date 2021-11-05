import { navLinks } from "./database";
import { useContext } from "react";
import AppContext from "../contexts/app-context";

const Header = ({ logo, navActive }) => {
  const { activeUser, setNav, setIsAuth } = useContext(AppContext);
  // console.log(activeUser);
  // console.log(activeUser);

  const handleClick = (route) => {
    setNav(route);
  };
  return (
    <header>
      <a href='/' className='logo'>
        <img src={logo} alt='TGC_LOGO' />
      </a>

      <nav className={navActive ? "nav-active" : ""}>
        {navLinks.map((link) => {
          return (
            <a
              href={link.url}
              className={
                activeUser.activeLink === link.route
                  ? "nav-link nav-link-active"
                  : "nav-link"
              }
              key={link.url}
              onClick={() => handleClick(link.route)}>
              {link.route}
            </a>
          );
        })}
      </nav>

      {/* burger nav */}
      <div
        className='burger-nav' //onClick={setNav}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Header;
