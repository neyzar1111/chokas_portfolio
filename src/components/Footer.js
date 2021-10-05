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
                           <img className= "icon" src="/assets/send_blue.png"/>
                       </a>
                   </button>

                    <button className="intro-button linkedinBtn">
                        <a   href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-signin " target="_blank">
                            Watch My LinkedIn
                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in"
                                 className=" icon linkedinSvg svg-inline--fa fa-linkedin-in fa-w-14 fa-2x contact-icon" role="img"
                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path fill="currentColor"
                                      d="M100.3 480H7.4V180.9h92.9V480zM53.8 140.1C24.1 140.1 0 115.5 0 85.8 0 56.1 24.1 32 53.8 32c29.7 0 53.8 24.1 53.8 53.8 0 29.7-24.1 54.3-53.8 54.3zM448 480h-92.7V334.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V480h-92.8V180.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V480z">

                                </path>
                            </svg>
                        </a>
                    </button>

                    <button className="intro-button">
                        <a href="https://github.com/neyzar1111" target="_blank">
                            Watch My GitHub
                            <img className= "icon" src="/assets/github.svg"/>
                        </a>
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
