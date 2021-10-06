const Header = ({ logo }) => {
  const navItems = [
    { route: "welcome", url: "/#home" },
    { route: "about", url: "/#about" },
    { route: "services", url: "/#services" },
    { route: "contact us", url: "/#contacts" },
    { route: "podcasts & more", url: "/podcast" },
    { route: "shop", url: "/shop" },
    { route: "news", url: "/news" },
    { route: "walk with g", url: "/walk" },
    { route: "team", url: "/team" },
  ];
  const navLinks = navItems.map((link) => {
    return (
      <a href={link.url} className="nav-link" key={link.url}>
        {link.route}
      </a>
    );
  });

  return (
    <header>
      <a href="/" className="logo">
        <img src={logo} alt="TGC_LOGO" />
      </a>

      <nav>{navLinks}</nav>
    </header>
  );
};

export default Header;
