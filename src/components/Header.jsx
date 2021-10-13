import { navLinks } from "./database";
import { useState } from "react";

const Header = ({ logo }) => {
  const [activeLink, setActiveLink] = useState("welcome");
  const [navActive, setNavActive] = useState(false);
  const handleClick = (clicked) => {
    setActiveLink(clicked);
    setNavActive(!navActive);
  };

  const setNav = () => {
    setNavActive(!navActive);
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
                activeLink === link.route
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
      <div className='burger-nav' onClick={setNav}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Header;
