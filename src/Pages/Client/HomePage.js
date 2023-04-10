import React from 'react';
import { Space } from 'antd';
import SlideShow from '../../Components/SlideShow/SlideShow';
import ProductsSwiperList from '../../Components/ProductsSwiperList/ProductsSwiperList';


const HomePage = (props) => {
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
                        <ProductsSwiperList />
                        <ProductsSwiperList />
                    </Space>
                </div>
            </div>
        </React.Fragment>
    )
}
export default HomePage;