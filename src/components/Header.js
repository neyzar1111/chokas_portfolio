import React ,{ useState, useRef }from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Header() {
    const navRev = useRef(null);
    const ulRev = useRef(null);
    const liRev = useRef(null);
    const closeRev = useRef(null);
    const mailRef = useRef(null);
    function openMenu (){
        navRev.current.classList.add("mobile_nav");
        ulRev.current.classList.add("mobile_ul");
        ulRev.current.classList.add("mobile_li");
        closeRev.current.classList.add("close_button");
        mailRef.current.classList.add("mailFilterInvert");

    }
    function closeFunction(){
        navRev.current.classList.remove("mobile_nav");
        ulRev.current.classList.remove("mobile_ul");
        ulRev.current.classList.remove("mobile_li");
        closeRev.current.classList.remove("close_button");
        mailRef.current.classList.remove("mailFilterInvert");
    }
    return (
        <header className="header">
            <h1 className="logo">AE</h1>
            <img  className="menu_button burger-icon"  onClick={openMenu} src="/assets/menu-of-three-lines.svg"/>
            <nav ref={navRev} className="desk_nav">
               <div className="closeBtnWrap">
                   <img ref={closeRev}   onClick={closeFunction} className="close close_icon"  src="/assets/close.svg"/>
               </div>
                <ul ref={ulRev} className="">
                    <Link to="/">
                        <li ref={liRev} className="">About me</li>
                    </Link>

                    <Link ref={liRev} to="/My_projects">
                        <li className="">My projects</li>
                    </Link>

                    <Link ref={liRev} to="/Contacts">
                        <li className="">Contacts </li>

                    </Link>


                </ul>
            </nav>
        </header>
    );
}

export default Header;
