import React, { useContext } from "react";
import { DeleteOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import CartContext from "../../Context/Cart/CartContext";
import HeaderCartItem from "./HeaderCartItem/HeaderCartItem";

import "./HeaderCartButton.css";

const HeaderCartButton = () => {
    const { cartItems } = useContext(CartContext);

    return (
        <>
            <div className="basket-area">
                <div className="basket-toggle">
                    <ShoppingCartOutlined />
                    <span className="item_counter">
                        <span id="basket_items">0</span>
                    </span>
                </div>
                <div className="basket-menu">
                    <div id="basket">
                        <ul className="basket-items">
                            <HeaderCartItem />
                        </ul>
                        <div id="basket_free">
                            <span className="free-img"></span>
                            <span className="free-title">سبد خرید شما خالیست!</span>
                        </div>
                        <div id="checkout" className="clearfix">
                            <div className="sum_basket_title">
                                <span className="price-section">
                                    <span id="sum_basket">398,000</span>
                                    <span className="sum-prices-currency">تومان</span>
                                </span>
                                <span className="number jhidden">عدد</span>
                            </div>
                            <a className="btn btn-custom" id="checkout_link" href="#">ثبت سفارش</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderCartButton;