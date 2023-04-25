import React from 'react';
import { Link } from 'react-router-dom';
import { StarFilled } from '@ant-design/icons';
import { seperatNumber, calcDiscount } from '../../Utils/utilities';
import './ProductItem.css'




const ProductItem = (props) => {

    return (
        <>
            <div className="thumb">
                <ul className="badges">
                    <li className="badge-off"> </li>
                </ul>

                <div className="product-link">
                    <Link to={`/product/${props.product.slug}`} title={props.product.name} className='product-box-img'>
                        <img className="product-image" src={props.product.thumb} data-src={props.product.thumb} alt={props.product.slug} width="400" height="300" />

                    </Link>
                    <div className="details">
                        <Link className="title" to={`/product/${props.product.slug}`} title={props.product.name}>
                            {props.product.name}
                        </Link>
                        <div className="details-price">
                            <div className="price-area">
                                <span className="old-price">
                                    <span className="old-price-inner">
                                        <span className="off-percent">{calcDiscount(props.product.price, props.product.price * 1.8, 1)}%</span>
                                        <span className="amount-old-price">{seperatNumber(props.product.price * 1.8)}</span>
                                    </span>
                                </span>
                                <span className="price">
                                    <span className="price-amount">{seperatNumber(props.product.price)}</span>
                                    <span className="currency">تومان</span>
                                </span>
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