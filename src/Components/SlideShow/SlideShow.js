import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/sea-green';


import slide1 from '../../Assets/img/slideshow/slideshow1.jpg';
import slide2 from '../../Assets/img/slideshow/slideshow2.jpg';
import slide3 from '../../Assets/img/slideshow/slideshow3.jpg';
import slide4 from '../../Assets/img/slideshow/slideshow4.jpg';

const SlideShow = () => {
  return (
      <Splide aria-label="My Favorite Images"
          data-splide='{
            "type":"loop",
            "autoplay":true,
            "direction":"rtl",
            "pauseOnHover": true
            }' >
          <SplideSlide>
              <img src={slide1} alt="Image 1" />
          </SplideSlide>
          <SplideSlide>
              <img src={slide2} alt="Image 2" />
          </SplideSlide>
          <SplideSlide>
              <img src={slide3} alt="Image 3" />
          </SplideSlide>
          <SplideSlide>
              <img src={slide4} alt="Image 4" />
          </SplideSlide>

      </Splide>
  )
}

export default SlideShow