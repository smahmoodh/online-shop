import React from "react";
import { NavLink } from "react-router-dom";
import './MenuItem.css';

const MenuItem = (props) => {
    return (
        <li className={props.cssClass}>
            <NavLink to={props.link} title={props.title}>
                {props.text}
            </NavLink>
            {props.children}
        </li>
    )
}
export default React.memo(MenuItem);