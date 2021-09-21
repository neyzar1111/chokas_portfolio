import React, {useState, useEffect, useRef} from "react";

function AboutMe() {
    const useDiv = useRef();
    const useDiv2 = useRef();
    const [scroll, setScroll] = useState(0);

    return (
        <div id="about_me">
            <div className="aboutmeContentWrap">
                <div className= "imgWrap"> <div className="chokaImg"></div></div>
                <div className="text-intro">
                   <h2> Hello, my name is Aichurok and I am a junior web developer!</h2>
                    <p>
                        I am passionate about building scalable software, creating effective solutions, and learning every day to grow professionally in the IT field.
                    </p>
                </div>

            </div>
            <section className="skills">
                <div className="rows animate__animated animate__fadeInUp">
                    <h3>Design</h3>
                    <div className="icon-wrap">
                        <img  className="" src="https://img.icons8.com/ios/30/ffffff/sass-avatar.png"/>
                        <img  className="" src="https://img.icons8.com/windows/30/ffffff/bootstrap.png"/>
                        <img  className="" src="https://img.icons8.com/ios/30/ffffff/html.png"/>
                    </div>
                </div>
                <div className="rows animate__animated animate__fadeInUp">
                    <h3>Code</h3>
                    <div className="icon-wrap">
                        <img  className="" src="https://img.icons8.com/ios-filled/30/ffffff/php.png"/>
                        <img  className="" src="https://img.icons8.com/ios-filled/30/ffffff/js.png"/>
                        <img className="" src="https://img.icons8.com/ios/30/ffffff/laravel.png"/>
                        <img className="" src="https://img.icons8.com/dotty/30/ffffff/react.png"/>
                    </div>
                </div>
                <div className="rows">
                    <h3>Tools</h3>
                    <div className="icon-wrap animate__animated animate__fadeInUp">
                        <img className="" src="https://img.icons8.com/ios-filled/30/ffffff/git.png"/>
                        <img className="" src="https://img.icons8.com/ios-glyphs/30/ffffff/github.png"/>
                        <img className="" src="https://img.icons8.com/windows/30/ffffff/nodejs.png"/>
                    </div>
                </div>
            </section>
            <section className="quoteSection">
                <div className="blockquoteWrap">
                    <blockquote>
                        <q>All our dreams can come true, if we have the courage to pursue them. </q>
                        <cite> – Walt Disney</cite>
                    </blockquote>
                </div>

            </section>
        </div>
    );
}

export default AboutMe;