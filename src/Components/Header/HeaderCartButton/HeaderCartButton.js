import React, { useState, useEffect, useContext } from "react";
import { DeleteOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import CartContext from "../../../Context/Cart/CartContext";
import HeaderCartItem from "./HeaderCartItem/HeaderCartItem";

import "./HeaderCartButton.css";

const HeaderCartButton = () => {
    const [activeBasket, setActiveBasket] = useState(false);
    const { cartItems } = useContext(CartContext);
    const cart = [{ "items": [{ "product_id": 163168, "variant_id": 187387, "type": 1, "type_label": "\u06a9\u0627\u0644\u0627", "title": "\u0647\u0646\u062f\u0632\u0641\u0631\u06cc \u062c\u06a9 3.5 \u0645\u06cc\u0644\u06cc\u0645\u062a\u0631\u06cc akg \u0633\u0627\u0645\u0633\u0648\u0646\u06af Samsung EO-IG955 AKG Earphone", "variant_title": "\u0645\u0634\u06a9\u06cc | \u0647\u0627\u06cc\u200c\u06a9\u067e\u06cc A++ | \u0633\u0627\u062e\u062a \u0648\u06cc\u062a\u0646\u0627\u0645", "image": "https:\/\/janebi.com\/janebi\/9fd2\/files\/thumb\/253877.jpg", "price": 398000, "old_price": 552000, "count": 1, "sum_price": 398000, "quantity": "234", "unit": "", "brand_name": "\u0633\u0627\u0645\u0633\u0648\u0646\u06af", "category": "\u062e\u0631\u06cc\u062f \u0648 \u0644\u06cc\u0633\u062a \u0642\u06cc\u0645\u062a \u0647\u0646\u062f\u0632\u0641\u0631\u06cc \u0628\u06cc \u0633\u06cc\u0645 \u0633\u0627\u0645\u0633\u0648\u0646\u06af" }], "basket_type": 1, "basket_price": 398000, "basket_status": 1, "item_count": 1, "session": 7721250213, "time": "0.0285", "error": null, "successful": true }];
    // console.log(cart);
    useEffect(() => {
        if (cart.length != 0) {
            console.log(cart);
        }
    }, []);
    const toggleCartBasketHandler = () => {
        setActiveBasket(!activeBasket);
    }
    return (
        <>
            <div className="basket-area">
                <div className="basket-toggle" onClick={()=>toggleCartBasketHandler()}>
                    <ShoppingCartOutlined />
                    <span className="item_counter">
                        <span id="basket_items">{cart[0].item_count}</span>
                    </span>
                </div>
                <div className={`basket-menu ${activeBasket ? 'active' : ''}`}>
                    <div id="basket">
                        {cart[0].item_count > 0 ?
                            <>
                                <HeaderCartItem items={cart[0].items} />
                                <div id="checkout" className="clearfix">
                                    <div className="sum_basket_title">
                                        <span className="price-section">
                                            <span id="sum_basket">{cart[0].basket_price}</span>
                                            <span className="sum-prices-currency">تومان</span>
                                        </span>
                                        {/* <span className="number jhidden">عدد</span> */}
                                    </div>
                                    <a className="btn btn-custom" id="checkout_link" href="#">ثبت سفارش</a>
                                </div>
                            </>
                            :
                            <div id="basket_free">
                                <span className="free-img"></span>
                                <span className="free-title">سبد خرید شما خالیست!</span>
                            </div>
                        }



                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderCartButton;