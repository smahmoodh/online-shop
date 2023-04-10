import React from "react";
import './MenuItems.css';

const MenuItems = (props) => {
    return (
        <ul className={props.cssClass}>
            {props.children}
        </ul>
    )
}
export default MenuItems;