import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

export const Header = () => {
const navigate = useNavigate();


return(
    <header>
        
        <h1>Light Reddit</h1>
        <nav>
            <NavLink to='/wildlifephotography'> Wildlife Photography </NavLink>
            <NavLink to='/LandscapePhotography'>Landscape Photography</NavLink>
        </nav>
        
        <Outlet/>
     </header>
)


}