import React, {useState, useEffect, useRef} from "react";

function AboutMe() {
    const useDiv = useRef();
    const useDiv2 = useRef();
    const [scroll, setScroll] = useState(0);

    window.onscroll = () =>{
        setScroll(window.scrollY - 800);
        console.log(scroll)
        useDiv.current.style.left = `${scroll}px` ;
    }
    return (
        <div id="about_me">
            <div className="aboutmeContentWrap">
                <div>
                    <h2>Hello, my name is Aichurok and I am junior web developer!</h2>
                    I am passionate about building scalable software, creating effective solutions, and learning every day to grow professionally in the IT field.
                </div>
            </div>
            <div className="scrollSection">
                <div ref={useDiv} className="line1">
                    <h1>Line1 Line1 Lin1</h1>
                </div>

                <div ref={useDiv2} className="line2">
                    <h1> Line 2 Line 2 Line2 Line2</h1>
                </div>

            </div>
        </div>
    );
}

export default AboutMe;