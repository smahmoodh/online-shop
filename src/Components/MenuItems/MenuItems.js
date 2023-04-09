import React from "react";
import './MenuItems.css';

const MenuItems = (props) => {
    return (
        <ul className="menuItems">
            {props.children}
        </ul>
    )
}
export default MenuItems;