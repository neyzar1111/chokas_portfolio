import React ,{ useState }from "react";
import {
    NavLink
} from "react-router-dom";

function Header() {
    const [navMenu, setNavMenu] = useState(false);

    return (
        <header className="header">
            <h1 className="logo"><span className="headerDecorSpan">&#123;</span>AE<span className="headerDecorSpan">&#125;</span></h1>
            <img  className="menu_button burger-icon"  onClick={()=>setNavMenu(true)} src="/assets/menu-of-three-lines.svg" alt="menu-button"/>

            <nav className={`${navMenu ? 'mobile_nav' : ""}`} >

               <div className="closeBtnWrap">
                   <img   onClick={()=>setNavMenu(false)}   className={` close close_icon ${navMenu ? 'close_button' : ""}`}   src="/assets/close.svg" alt="close button"/>
               </div>

                <ul className={`${navMenu ? 'mobile_ul' : ""}`}>
                    <NavLink  exact to="/" activeClassName="activeNav">
                        <li  onClick={()=>{  setNavMenu(false);}}  className={`navLink ${navMenu ? 'mobile_li' : ""}`} > About me</li>
                    </NavLink>

                    <NavLink  exact  to="/My_projects" activeClassName="activeNav" >
                        <li  onClick={()=>{  setNavMenu(false); }}  className={`navLink ${navMenu ? 'mobile_li' : ""}`} >My projects</li>
                    </NavLink>

                    <NavLink exact  to="/Contacts" activeClassName="activeNav">
                        <li    onClick={()=>{  setNavMenu(false);}}  className={`navLink ${ navMenu ? 'mobile_li' : ""}`} > Contacts </li>
                    </NavLink>

                </ul>
            </nav>
        </header>
    );
}

export default Header;
