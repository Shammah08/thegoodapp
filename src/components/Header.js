const Header = () => {
    const navItems = ['welcome', 'about', 'services', 'team', 'podcast', 'mixes', 'contacts']
    const navLinks = navItems.map( link => {
       return <a href={'/' + link}>{link}</a>
    })
    return (
        <header>
            <div></div>
            <nav>{navLinks}</nav>
        </header>
    )
}

export default Header
