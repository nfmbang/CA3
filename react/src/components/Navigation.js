import React from 'react';
import { NavLink } from "react-router-dom";
import {LoginComp} from '../App'


const Navigation = () => {
    return (
        <ul class="header">
            <li>
                <NavLink to="/" exact>Home</NavLink>
            </li>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
            <li>
                <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
            <LoginComp />
            </li>
        </ul>
    );
}

export default Navigation;