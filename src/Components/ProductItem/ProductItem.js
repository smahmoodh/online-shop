import React from 'react';
import { StarFilled } from '@ant-design/icons';
import './ProductItem.css'




const ProductItem = (props) => {

    return (
        <>
            <div className="product-slide price_on" style={{ width: "100%", display: "inline-block" }}>
                <div className="thumb" data-id="180870" data-title={props.product.title} data-price="1753.00" data-category="سایر لوازم جانبی ها">
                    <ul className="badges">
                        <li className="badge-off"> </li>
                    </ul>

                    <div className="product-link">
                        <a href={`/product/${props.product.id}`} title={props.product.name} target="_blank" tabindex="0" dideo-checked="true">
                            <img className="" src={props.product.thumb} data-src={props.product.thumb} alt={props.product.slug} width="400" height="300" />

                        </a>
                        <div className="details">
                            <a className="title" href={`/product/${props.product.id}`} title={props.product.name} target="_blank" tabindex="0" dideo-checked="true">
                                {props.product.name}
                            </a>
                            <div className="details-price">
                                <div className="price-area">
                                    <span className="old-price">
                                        <span className="old-price-inner">
                                            <span className="off-percent">22%</span>
                                            <span className="amount-old-price">{props.product.price * 0.8}</span>
                                        </span>
                                    </span>
                                    <span className="price"><span className="price-amount">{props.product.price}</span><span className="currency">تومان</span></span>
                                </div>
                                <div className="rate-section">
                                    <span className="reviewcount">(10)</span>
                                    <span className="star-rate"> 4.2</span>
                                    <i className="shape-star">
                                        <StarFilled />
                                    </i>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}


export default ProductItem