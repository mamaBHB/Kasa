import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png"



function Header() {
    return (
        <div className="header">
            <NavLink to="/">
                <img className="logo_header" src={logo} alt="logo"></img>
            </NavLink>
            <div className="nav_link">
                <NavLink to="/">
                    Accueil
                </NavLink>
                <NavLink to="/apropos">
                    A propos
                </NavLink>
            </div>
        </div>
    )
};

export default Header;