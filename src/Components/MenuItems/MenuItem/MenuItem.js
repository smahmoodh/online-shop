import React from "react";
import { NavLink } from "react-router-dom";
import './MenuItem.css';

const MenuItem = (props) => {
    return (
        <li className="menuItem">
            <NavLink to={props.link} title={props.title}>
                {props.children}
            </NavLink>
        </li>
    )
}
export default React.memo(MenuItem);