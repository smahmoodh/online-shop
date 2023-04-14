import React from 'react';
import { StarFilled } from '@ant-design/icons';
import { seperatNumber, calcDiscount } from '../../Utils/utilities';
import './ProductItem.css'




const ProductItem = (props) => {

    return (
        <>
            <div className="thumb" data-id={props.product.id} data-title={props.product.title} data-price="1753.00" data-category="سایر لوازم جانبی ها">
                <ul className="badges">
                    <li className="badge-off"> </li>
                </ul>

                <div className="product-link">
                    <a href={`/product/${props.product.id}`} title={props.product.name} target="_blank" tabIndex="0" dideo-checked="true">
                        <img className="" src={props.product.thumb} data-src={props.product.thumb} alt={props.product.slug} width="400" height="300" />

                    </a>
                    <div className="details">
                        <a className="title" href={`/product/${props.product.id}`} title={props.product.name} target="_blank" tabIndex="0" dideo-checked="true">
                            {props.product.name}
                        </a>
                        <div className="details-price">
                            <div className="price-area">
                                <span className="old-price">
                                    <span className="old-price-inner">
                                        <span className="off-percent">{calcDiscount(props.product.price, props.product.price * 1.8, 1)}%</span>
                                        <span className="amount-old-price">{seperatNumber(props.product.price * 1.8)}</span>
                                    </span>
                                </span>
                                <span className="price"><span className="price-amount">{seperatNumber(props.product.price)}</span><span className="currency">تومان</span></span>
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
        </>
    )
}


export default ProductItem