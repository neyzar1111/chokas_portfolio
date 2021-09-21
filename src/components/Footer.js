import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Footer() {
    return (
        <footer>
            <div className="footerCol1">
                <Link to="/">
                    <li>About me</li>
                </Link>

                <Link to="/My_projects">
                    <li>My projects</li>
                </Link>

                <Link to="/Contacts">
                    <li>Contact's</li>
                </Link>
            </div>
        </footer>
    );
}

export default Footer;
