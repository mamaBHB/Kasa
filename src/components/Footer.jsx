import { NavLink } from "react-router-dom";
import logo_footer from "../assets/logo_footer.png"



function Footer() {
    return (
        <div className="footer">
            <NavLink to="/">
                <img className="logo_footer" src={logo_footer} alt="logo"></img>
            </NavLink>
            <div className="footer_text">
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </div>
    )
};

export default Footer;
