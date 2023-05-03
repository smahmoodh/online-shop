import React, { useRef } from 'react'
// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/modules/navigation/navigation.min.css';
import 'swiper/modules/pagination/pagination.min.css';
import 'swiper/modules/autoplay/autoplay.min.css';
import './SlideShow.css';


import slide1 from '../../Assets/img/slideshow/slideshow1.jpg';
import slide2 from '../../Assets/img/slideshow/slideshow2.jpg';
import slide3 from '../../Assets/img/slideshow/slideshow3.jpg';
import slide4 from '../../Assets/img/slideshow/slideshow4.jpg';

const SlideShow = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <Swiper
            dir="rtl"
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            a11y={{
                prevSlideMessage: 'Previous slide',
                nextSlideMessage: 'Next slide',
            }}
            loop={true}
            spaceBetween={50}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            navigation
            pagination={{ dynamicBullets: true, clickable: true }}

        >

            <SwiperSlide>
                <img src={slide1} alt="slide 1" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide2} alt="slide 2" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide3} alt="slide 3" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide4} alt="slide 4" />
            </SwiperSlide>
            <div className="autoplay-progress" slot="container-end">
                <svg viewBox="0 0 48 48" ref={progressCircle}>
                    <circle cx="24" cy="24" r="20"></circle>
                </svg>
                <span ref={progressContent}></span>
            </div>
        </Swiper>


    )
}

export default SlideShow;