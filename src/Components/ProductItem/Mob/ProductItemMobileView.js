import React from 'react';
import { Link } from 'react-router-dom';
import { StarFilled } from '@ant-design/icons';
import { seperatNumber, calcDiscount } from '../../../Utils/utilities';
import './ProductItemMobileView.css'

const ProductItemMobileView = ({product}) => {
    return (
        <>
            <div className="thumb">
                <ul className="badges">
                    <li className="badge-special"></li>
                    <li className="badge-off"></li>
                </ul>

                <div className="product-link">
                    <Link to={`/product/${product.slug}`} title={product.name} className="image-product" >
                        <img src={product.thumb} data-src={product.thumb} alt={product.slug} width="400" height="300" />
                    </Link>

                    <Link className="h2" to={`/product/${product.slug}`} title={product.name}>
                        {product.name}
                    </Link>
                </div>

                <div className="details-price">
                    <div className="rate-section">
                        <i className="shape-star">
                            <StarFilled/>
                        </i>
                        <span className="star-rate"> 3.34</span>
                        <span className="reviewcount">(386)</span>
                    </div>

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
                </div>
            </div>
        </>
    )
}

export default ProductItemMobileView