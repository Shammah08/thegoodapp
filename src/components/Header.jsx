import { navLinks } from "./database";

const Header = ({ logo, onClick, setNav, activeLink, navActive }) => {
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
              // onClick={() => onClick(link.route)}
            >
              {link.route}
            </a>
          );
        })}
      </nav>

      {/* burger nav */}
      <div className='burger-nav' onClick={setNav}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Header;
