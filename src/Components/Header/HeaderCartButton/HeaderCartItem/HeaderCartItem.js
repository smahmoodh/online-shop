import React from 'react';
import { DeleteOutlined } from '@ant-design/icons';

import './HeaderCartItem.css';

const HeaderCartItem = ({ items }) => {
    return (
        <>
            {items && (
                <ul className="basket-items">
                    {items.map((item, index) =>
                        <li key={index}>
                            <div className="item">
                                <div className="image">
                                    <img src={item.image} alt={item.title} />
                                </div>
                                <div className="details">
                                    <div className="details-top">
                                        <div className="title">
                                            {item.title}
                                        </div>
                                        <a className="btn btn-delete" title="حذف" data-delete={item.product_id} >
                                            <DeleteOutlined />
                                        </a>
                                    </div>
                                    <div className="price_variant">
                                        <span className="number-buy">
                                            <span>{item.quantity} عدد</span>
                                            <span className="item-color">رنگ</span>
                                        </span>
                                        <span className="price-buy">{item.price} <span>تومان</span></span>
                                    </div>
                                </div>
                            </div>
                        </li>)
                    }
                </ul>
            )}

        </>
    )
}

export default HeaderCartItem