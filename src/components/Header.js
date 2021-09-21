import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <h1>Aichurok Enazarova</h1>
            <nav>
                <ul>
                    <Link to="/">
                        <li>About me</li>
                    </Link>

                    <Link to="/My_projects">
                        <li>My projects</li>
                    </Link>

                    <Link to="/Contacts">
                        <li>Contact's</li>
                    </Link>

                </ul>
            </nav>
        </header>
    );
}

export default Header;
