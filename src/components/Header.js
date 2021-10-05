import React ,{ useState, useRef }from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


function Header() {

    const [navMenu, setNavMenu] = useState(false);


    return (
        <header className="header">
            <h1 className="logo"><span className="headerDecorSpan">&#123;</span>AE<span className="headerDecorSpan">&#125;</span></h1>
            <img  className="menu_button burger-icon"  onClick={()=>setNavMenu(true)} src="/assets/menu-of-three-lines.svg"/>

            <nav className={`${navMenu ? 'mobile_nav' : ""}`} >

               <div className="closeBtnWrap">
                   <img   onClick={()=>setNavMenu(false)}   className={` close close_icon ${navMenu ? 'close_button' : ""}`}   src="/assets/close.svg"/>
               </div>

                <ul className={`${navMenu ? 'mobile_ul' : ""}`}>
                    <Link to="/">
                        <li  onClick={()=>setNavMenu(false)}  className={`${navMenu ? 'mobile_li' : ""}`} > About me</li>
                    </Link>

                    <Link to="/My_projects">
                        <li  onClick={()=>setNavMenu(false)}  className={`${navMenu ? 'mobile_li' : ""}`} >My projects</li>
                    </Link>

                    <Link to="/Contacts">
                        <li    onClick={()=>setNavMenu(false)}  className={`${navMenu ? 'mobile_li' : ""}`} >Contacts </li>
                    </Link>

                </ul>
            </nav>
        </header>
    );
}

export default Header;
