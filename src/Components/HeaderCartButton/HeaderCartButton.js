import React from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import "./HeaderCartButton.css";

const HeaderCartButton = () => {

    return (
        <div id="mini-cart">
            <a id="cart-button" className="header-cart-btn js-dropdown-toggle" data-counter="0" href="/cart">
                <ShoppingCartOutlined style={{fontSize: "22px"}} />
                <span className="js-cart-count" data-counter="0">سبد خرید</span>
            </a>
        </div>
    )
}

export default HeaderCartButton;