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

                    <a href="mailto:choka95@hotmail.com" target="_blank" >
                       <button className="intro-button">
                           Send Me Email
                           <img className= "icon" src="/assets/email2.svg"/>
                       </button>
                    </a>
                    <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-signin">
                        <button className="intro-button">
                            Watch My LinkedIn
                            <img className= "icon" src="/assets/linkedin2.svg"/>
                        </button>

                    </a>
                    <a href="https://github.com/neyzar1111">
                        <button className="intro-button">
                            Watch My LinkedIn
                            <img className= "icon" src="/assets/github.svg"/>
                        </button>
                    </a>

                </div>
            </div>

        </footer>
    );
}

export default Footer;
