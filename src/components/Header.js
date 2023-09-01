import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

export const Header = () => {
const navigate = useNavigate();


return(
    <header>
        
        <h1 className="h1">Light Reddit</h1>
        <nav className="nav">
            <NavLink to='/wildlifephotography' className="navlink"> Wildlife Photography </NavLink>
            <NavLink to='/LandscapePhotography' className="navlink">Landscape Photography</NavLink>
        </nav>
        
        <Outlet/>
     </header>
)


}