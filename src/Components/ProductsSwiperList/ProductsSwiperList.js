import React, { useEffect, useState } from "react";


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';
import "./ProductsSwiperList.css";


import ProductItem from "../ProductItem/ProductItem";

const ProductsSwiperList = () => {

    const [products, setProducts] = useState([])

    const fetchData = async () => {
        const response = await fetch("https://json.xstack.ir/api/v1/products?limit=15")
        const data = await response.json();
        console.log(data);
        setProducts(data.data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="swiper-products products">
            {products.length > 0 && (
                <Swiper
                    slidesPerView={1}
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
                            <ProductItem product={product} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </div>
    )
}

export default ProductsSwiperList
