import React from 'react';
import { Link } from 'react-router-dom';
import { StarFilled } from '@ant-design/icons';
import { seperatNumber, calcDiscount } from '../../../Utils/utilities';
import './ProductItemDesktopView.css'




const ProductItemDesktopView = ({product}) => {
    
    return (
        <>
            <div className="thumb">
                <ul className="badges">
                    <li className="badge-off"> </li>
                </ul>

                <div className="product-link">
                    <Link to={`/product/${product.slug}`} title={product.name} className='product-box-img'>
                        <img className="product-image" src={product.thumb} data-src={product.thumb} alt={product.slug} width="400" height="300" />

                    </Link>
                    <div className="details">
                        <Link className="title" to={`/product/${product.slug}`} title={product.name}>
                            {product.name}
                        </Link>
                        <div className="details-price">
                            <div className="price-area">
                                <span className="old-price">
                                    <span className="old-price-inner">
                                        <span className="off-percent">{calcDiscount(product.price, product.price * 1.8, 1)}%</span>
                                        <span className="amount-old-price">{seperatNumber(product.price * 1.8)}</span>
                                    </span>
                                </span>
                                <span className="price">
                                    <span className="price-amount">{seperatNumber(product.price)}</span>
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


export default ProductItemDesktopView