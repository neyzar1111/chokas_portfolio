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
    function toggleMenu (){
        navRev.current.classList.add("mobile_nav");
        ulRev.current.classList.add("mobile_ul");
        ulRev.current.classList.add("mobile_li");
        closeRev.current.classList.add("close_button");
    }
    function closeFunction(){
        navRev.current.classList.remove("mobile_nav");
        ulRev.current.classList.remove("mobile_ul");
        ulRev.current.classList.remove("mobile_li");
        closeRev.current.classList.remove("close_button");
    }
    return (
        <header className="header">
            <h1>Aichurok Enazarova</h1>
            <img className="menu_button"  onClick={toggleMenu} src="https://img.icons8.com/ios-filled/30/000000/menu--v1.png"/>
            <nav ref={navRev} className="desk_nav">
                <img ref={closeRev}   onClick={closeFunction} className=" close"  src="https://img.icons8.com/ios-filled/30/ffffff/close-window.png"/>
                <ul ref={ulRev} className="">
                    <Link to="/">
                        <li ref={liRev} className="">About me</li>
                    </Link>

                    <Link ref={liRev} to="/My_projects">
                        <li className="">My projects</li>
                    </Link>

                    <Link ref={liRev} to="/Contacts">
                        <li className="">Contacts</li>
                    </Link>

                </ul>
            </nav>
        </header>
    );
}

export default Header;
