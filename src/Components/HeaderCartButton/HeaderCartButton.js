import React, { useContext } from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import CartContext from "../../Context/Cart/CartContext";
import "./HeaderCartButton.css";

const HeaderCartButton = () => {
    const { cartItems } = useContext(CartContext);

    return (
        <div id="mini-cart">
            <a id="cart-button" className="header-cart-btn js-dropdown-toggle" data-counter={cartItems.length} href="/cart">
                <ShoppingCartOutlined style={{ fontSize: "22px" }} />
                <span className="js-cart-count" data-counter={cartItems.length}>سبد خرید</span>
            </a>
        </div>
    )
}

export default HeaderCartButton;