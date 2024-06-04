// import React, { useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/pagination";
// import "swiper/css/effect-fade";
// import SwiperCore, { EffectFade, FreeMode, Pagination } from "swiper";
// import { Container } from "react-bootstrap";
// import "../Sliderbar/slider.css";
// import img1 from "../assert/slider1.png";
// import img2 from "../assert/slideropacity2.png";
// import img3 from "../assert/sliderwide2.png";

// SwiperCore.use([EffectFade, FreeMode, Pagination]);

// const Slider = () => {
//   const sliderImages = [img1, img1, img3, img1, img1, img3];
//   const [activeIndex, setActiveIndex] = useState(1); // Set initial active index to 1

//   const handleSlideChange = (swiper) => {
//     setActiveIndex(swiper.realIndex); // Use realIndex instead of activeIndex
//   };

//   return (
//     <>
//       <div className="feature">
//         <h6>NEW & FEATURED VIDEOS</h6>
//         <button>Previous</button>
//         <button>Next</button>
//       </div>

//       <div>
//         <Swiper
//           slidesPerView={1.5}
//           spaceBetween={20}
//           freeMode={true}
//           pagination={{
//             clickable: true,
//           }}
//           modules={[EffectFade, FreeMode, Pagination]}
//           className="mySwiper"
//           onSlideChange={handleSlideChange}
//           loop={true}
//           initialSlide={1}
//           centeredSlides={true}
//           centeredSlidesBounds={true}
//           centeredSlidesBoundsValue={0}
//         >
//           <div className="slider-div">
//             {sliderImages.map((element, index) => (
//               <SwiperSlide
//                 key={index}
//                 className={`swiper-slide ${
//                   index !== activeIndex ? "blur" : ""
//                 }`} // Apply blur class to side images
//               >
//                 <img src={element} alt="" />
//               </SwiperSlide>
//             ))}
//           </div>
//         </Swiper>
//       </div>
//     </>
//   );
// };
// export default Slider;
import React from "react";
import CardSlider from "../CardComponent/index";
import Slider from "../Sliderbar/sliderbar";

const Home = () => {
  return (
    <div>
      <Slider />
      <CardSlider />
    </div>
  );
};

export default Home;