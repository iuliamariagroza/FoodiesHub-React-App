import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";

import { faCog, faHome, faList } from "@fortawesome/free-solid-svg-icons";

export default function Navbar()
{
    const [showSidebar, setShowSidebar] = useState(false)
    const location = useLocation();
    const links = [
        {
            name: "Home",
            path: "/",
            icon: faHome
        },
        {
            name: "Recipes",
            path: "/recipes",
            icon: faList
        },
        {
            name: "Settings",
            path: "/settings",
            icon: faCog
        }
    ]
    function closeSidebar(){
        setShowSidebar(false)
    }
    return(
        <>
        <div className="navbar container">
            <Link to="/" className="logo">F<span>oo</span>diesHub</Link>
            <div className="navbar-links">
                {
                    links.map(link =>(
                        <Link className={location.pathname === link.path ? "active" : ""} to={link.path} key={link.name}>{link.name}</Link>
                    )) }
            </div>
            <div onClick={() => setShowSidebar(true)} className={showSidebar ? "sidebar-button active": 'sidebar-button'}>
               <div className="bar"></div>
               <div className="bar"></div>
               <div className="bar"></div>  
            </div>
        </div>
        {showSidebar && <Sidebar close={closeSidebar} links={links} /> }
        </>
    )
}