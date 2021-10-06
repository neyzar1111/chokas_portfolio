import React from "react";


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


                   <button className="intro-button">
                       <a href="mailto:choka95@hotmail.com" target="_blank" >
                           Send Me Email
                       </a>
                       <img className= "icon" src="/assets/002-email.png"/>
                   </button>

                    <button className="intro-button linkedinBtn">
                        <a   href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-signin " target="_blank">
                            Watch My LinkedIn
                        </a>
                        <img  className= "icon" src="/assets/001-linkedin.png"/>
                    </button>

                    <button className="intro-button">
                        <a href="https://github.com/neyzar1111" target="_blank">
                            Watch My GitHub
                        </a>
                        <img className= "icon" src="/assets/003-github.png"/>
                    </button>

                </div>

                <div className="copyRight">
                        Copyright
                        <img className='iconCopyright' src="https://img.icons8.com/ios-glyphs/30/516d95/copyright.png"/>
                        2021
                        Aichurok Enazarova
                </div>

            </div>

        </footer>
    );
}

export default Footer;
