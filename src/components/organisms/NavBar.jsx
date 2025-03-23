import { NavLink } from "react-router";

const NavBar = () => {
    return (
    <nav className="header">
        <NavLink className="navLink" to="/MenuPrincipal">
            <img className="imagenHeader" src="https://vanilla-web-pokedex.pages.dev/assets/images/pokedex-logo.png" alt="Menu Principal" />
        </NavLink>
    </nav>
    )
}

export default NavBar;