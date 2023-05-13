import React from "react";


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation } from "swiper";

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/modules/navigation/navigation.min.css';
import "./ProductsSwiperList.css";


import ProductItem from "../ProductItem/ProductItem";

const ProductsSwiperList = ({products}) => {

    console.log(products);

    return (
        <div className="swiper-products products">
            {products.length > 0 && (
                <Swiper
                    slidesPerView={1.5}
                    spaceBetween={5}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 5.5,
                            spaceBetween: 0,
                        },
                    }}
                    rewind={true}
                    navigation
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    {products.map(product => (
                        <SwiperSlide key={product.id}>
                            <div className="product-slide price_on" style={{ width: "100%", display: "inline-block" }}>
                                <ProductItem product={product} slider={true} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </div>
    )
}

export default ProductsSwiperList
