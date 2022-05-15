import { useContext, useEffect, useState } from "react";
import { appContext } from "../../contexts/AppState";
import { logos, navLinks } from "../database";
import { Link } from "react-router-dom";

import "./header.scss";

const Header = () => {
  const { activeUser, setNav } = useContext(appContext);
  const [linkState, setLinkState] = useState("");
  const [colorChange, setColorChange] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  useEffect(() => {
    setLinkState(activeUser.activeLink);

    // eslint-disable-next-line
  }, []);

  const changeNavbarColor = () => {
    if (window.scrollY >= 600) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  const handleClick = (link) => {
    // set active link in state
    setNav(link);

    // set active link in state
    setLinkState(link);

    // hide nav in mobile view onClick
    setMobileNav(!mobileNav);
  };

  return (
    <header
      style={{
        background: colorChange && "white",
      }}
    >
      <Link to="/" className="logo">
        <img src={logos.logoBlue} alt="TGC_LOGO" />
      </Link>

      <nav className={mobileNav ? "mobile-active" : ""}>
        {/* Check if url links to an ID on page */}
        {navLinks.map((link) => {
          if (link.url.includes("#")) {
            return (
              <a
                href={link.url}
                className={
                  linkState === link.route ? "nav-link active" : "nav-link"
                }
                style={{ color: colorChange && "black" }}
                key={link.url}
                onClick={() => handleClick(link.route)}
              >
                {link.route}
              </a>
            );
          } else {
            return (
              <Link
                to={link.url}
                className={
                  linkState === link.route ? "nav-link active" : "nav-link"
                }
                style={{ color: colorChange && "black" }}
                key={link.url}
                onClick={() => handleClick(link.route)}
              >
                {link.route}
              </Link>
            );
          }
        })}
      </nav>

      {/* burger nav */}
      <div className="burger-nav" onClick={() => setMobileNav(!mobileNav)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Header;
