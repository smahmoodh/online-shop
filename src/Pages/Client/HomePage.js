import React, { useEffect, useState } from "react";
import { Space } from 'antd';
import SlideShow from '../../Components/SlideShow/SlideShow';
import ProductsSwiperList from '../../Components/ProductsSwiperList/ProductsSwiperList';


const HomePage = (props) => {
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
        <React.Fragment>
            <div className='page_home'>
                <div className='main-content'>
                    <Space
                        direction="vertical"
                        size="large"
                        style={{ display: 'flex', }}
                    >
                        <SlideShow />
                        <ProductsSwiperList products={products} />
                        <ProductsSwiperList products={products} />
                    </Space>
                </div>
            </div>
        </React.Fragment>
    )
}
export default HomePage;