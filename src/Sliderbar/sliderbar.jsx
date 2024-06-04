import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import SwiperCore, { EffectFade, FreeMode, Pagination } from "swiper";
import { Container } from "react-bootstrap";
import "../Sliderbar/slider.css";
import greaterthen from "../assert/arrow.png";
import lessthen from "../assert/less-than.svg";
// for onther slider
import "../CardComponent/card.css";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";

const Course = ({ type, sliderData }) => {
  const [activeIndex, setActiveIndex] = useState(1); // Set initial active index to 1
  const swiperRef = useRef(null);
  const swiperRef2 = useRef(null);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex); // Use realIndex instead of activeIndex
  };

  const handlePreviousbig = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextbig = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrevious = () => {
    if (swiperRef2.current && swiperRef2.current.swiper) {
      swiperRef2.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef2.current && swiperRef2.current.swiper) {
      swiperRef2.current.swiper.slideNext();
    }
  };
  console.log("type", type);
  return (
    <>
      {type == 1 && (
        <>
        <Container>
        <div className="feature">
            <h6>NEW & FEATURED VIDEOS</h6>
            <div className="feature-btn">
              <button onClick={handlePreviousbig} className="btn-1">
                <img src={lessthen} alt="" style={{ width: 14 }} />
              </button>
              <button onClick={handleNextbig} className="btn-1">
                <img src={greaterthen} alt="" style={{ width: 8 }} />
              </button>
            </div>
          </div>
        </Container>
          
          <div>
            <Swiper
              ref={swiperRef}
              slidesPerView={1.5}
              spaceBetween={20}
              freeMode={true}
              pagination={{
                clickable: true,
                el: ".pagination",
                renderBullet: function (index, className) {
                  return `<div class="${className}"></div>`;
                },
              }}
              onSlideChange={handleSlideChange}
              loop={true}
              initialSlide={1}
              centeredSlides={true}
              centeredSlidesBounds={true}
              centeredSlidesBoundsValue={0}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 50,
                },
                1280: {
                  slidesPerView: 1.5,
                  spaceBetween: 30,
                },
              }}
            >
              {type == 1 && (
                <>
                  <div className="slider-div">
                    {sliderData.map((element, index) => (
                      <>
                        <SwiperSlide
                          key={index}
                          className={`swiper-slide ${
                            index !== activeIndex ? "blur" : ""
                          }`} // Apply blur class to side images
                        >
                          <div>
                            <img src={element.img} alt="" />
                            <div className="slider-down-div">
                              <h3>{element.title}</h3>
                              <p>{element.description}</p>
                            </div>
                          </div>
                        </SwiperSlide>
                      </>
                    ))}
                  </div>
                </>
              )}
            </Swiper>
          </div>
        </>
      )}

     {
      type == 2 && (
        <>

        </>
      )
     }



      {type == 3 && (
        <>
          <div>
            <Container>
              <div className="feature-minislider">
                <h6>BECAUSE YOU VIEWED</h6>
                <div className="feature-minislider-btn">
                  <button onClick={handlePrevious} className="btn-1">
                    <img src={lessthen} alt="" style={{ width: 14 }} />
                  </button>
                  <button onClick={handleNext} className="btn-1">
                    <img src={greaterthen} alt="" style={{ width: 8 }} />
                  </button>
                </div>
              </div>
              <hr />
            </Container>

            <div className="App">
              <Swiper
                ref={swiperRef2}
                spaceBetween={30}
                freeMode={true}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                initialSlide={1}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                  },
                  1280: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                  },
                }}
              >
                <div>
                  {sliderData.map((values, index) => {
                    console.log("values", values);
                    return (
                      <>
                        <SwiperSlide>
                          <Card>
                            <div className={"card_image"}>
                              <Card.Img
                                className={"card_img"}
                                variant="top"
                                src={values.img}
                              />
                              <Badge>{values.Badge}</Badge>
                            </div>
                            <Card.Body>
                              <span className={"info_text"}>
                                {values.title}
                              </span>
                              <Card.Title>{values.session}</Card.Title>
                              <Card.Text>
                                <span className={"author_name"}>
                                  {values.auther_name}
                                </span>
                              </Card.Text>
                            </Card.Body>
                          </Card>
                        </SwiperSlide>
                      </>
                    );
                  })}
                </div>
              </Swiper>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default Course;
