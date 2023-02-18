import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png"



function Header() {
    return (
        <div className="header">
            <NavLink to="/">
                <img className="header_logo" src={logo} alt="logo"></img>
            </NavLink>
            <div className="nav_link">
                <NavLink className="nav_link_item" to="/">
                    Accueil
                </NavLink>
                <NavLink className="nav_link_item" to="/apropos">
                    A propos
                </NavLink>
            </div>
        </div>
    )
};

export default Header;