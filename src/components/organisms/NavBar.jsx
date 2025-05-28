import { NavLink } from "react-router";
import Button from "../atoms/Button";
import React, { useContext } from 'react'; 
import { ThemeContext } from '../../context/ThemeContext'; 

const NavBar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    
    return (
    <nav className="header">
        <NavLink className="navLink" to="/MenuPrincipal">
            <img className="imagenHeader" src="https://vanilla-web-pokedex.pages.dev/assets/images/pokedex-logo.png" alt="Menu Principal" />
        </NavLink>
        <Button className="cambiadorModo" onClick={toggleTheme}>
            {theme == 'moderno' ? 'Modo Clasico' : 'Modo Moderno'}
        </Button>
    </nav>
    )
}

export default NavBar;