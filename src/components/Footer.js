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
            <div className="footerContentWrap">
               <h1>
                   Keep In Touch.
               </h1>
                <p>
                    I'm currently open to work as a Front-end Developer.
                    Let's get in touch and talk more about your projects.
                </p>
                <div className='footer-icon_Container' >
                    <a href="mailto:choka95@hotmail.com" target="_blank" ><img className= "footer-icon" src="https://img.icons8.com/material-sharp/38/000000/mail.png"/></a>

                    <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-signin">
                        <img className= "footer-icon" src="https://img.icons8.com/windows/38/000000/linkedin-2.png"/>

                    </a>
                    <a href="https://github.com/neyzar1111">
                        <img className= "footer-icon" src="https://img.icons8.com/ios-filled/38/000000/github.png"/>

                    </a>
                </div>
            </div>

        </footer>
    );
}

export default Footer;
