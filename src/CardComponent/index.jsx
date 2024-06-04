import "../CardComponent/card.css";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useRef } from "react";
import greaterthen from "../assert/arrow.png";
import lessthen from "../assert/less-than.svg";
import { Container } from "react-bootstrap";
// import Demo from "../assert/Rectangle.png";
// import Demo1 from "../assert/Rectangle2.png";
// import Demo3 from "../assert/Rectangle3x.png";

const CardSlider = () => {
  const swiperRef = useRef(null);

  const handlePrevious = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <>
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
          ref={swiperRef}
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
          <SwiperSlide>
            <Card>
              <div className={"card_image"}>
                <Card.Img
                  className={"card_img"}
                  variant="top"
                  // src={Demo}
                  src="https://media.kasperskycontenthub.com/wp-content/uploads/sites/103/2019/09/26105755/fish-1.jpg"
                />
                <Badge>New</Badge>
              </div>
              <Card.Body>
                <span className={"info_text"}>
                  Session • 30d • Technology and Tools
                  {/* {values.text} */}
                </span>
                <Card.Title>
                  Start A Profitable Online Store In Just 12 Weeks
                  {/* {values.title} */}
                </Card.Title>
                <Card.Text>
                  <span className={"author_name"}>Kevin Gundersen</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card>
              <div className={"card_image"}>
                {/* <Card.Img className={"card_img"} variant="top" src={Demo1} /> */}
                <Badge>New</Badge>
              </div>
              <Card.Body>
                <span className={"info_text"}>
                  Session • 30d • Technology and Tools
                </span>
                <Card.Title>
                  Start A Profitable Online Store In Just 12 Weeks
                </Card.Title>
                <Card.Text>
                  <span className={"author_name"}>Kevin Gundersen</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card>
              <div className={"card_image"}>
                <Card.Img
                  className={"card_img"}
                  variant="top"
                  src="https://media.kasperskycontenthub.com/wp-content/uploads/sites/103/2019/06/20122305/Ransomware.jpg"
                  // src={Demo3}
                />
                <Badge>New</Badge>
              </div>
              <Card.Body>
                <span className={"info_text"}>
                  Session • 30d • Technology and Tools
                </span>
                <Card.Title>
                  Start A Profitable Online Store In Just 12 Weeks
                </Card.Title>
                <Card.Text>
                  <span className={"author_name"}>Kevin Gundersen</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card>
              <div className={"card_image"}>
                <Card.Img
                  className={"card_img"}
                  variant="top"
                  src="https://images.pexels.com/photos/2182977/pexels-photo-2182977.jpeg"
                  // src={Demo}
                />
                <Badge>New</Badge>
              </div>
              <Card.Body>
                <span className={"info_text"}>
                  Session • 30d • Technology and Tools
                </span>
                <Card.Title>
                  Start A Profitable Online Store In Just 12 Weeks
                </Card.Title>
                <Card.Text>
                  <span className={"author_name"}>Kevin Gundersen</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card>
              <div className={"card_image"}>
                {/* <Card.Img
                  className={"card_img"}
                  variant="top"
                  src={Demo1}
                   /> */}
                <Badge>New</Badge>
              </div>
              <Card.Body>
                <span className={"info_text"}>
                  Session • 30d • Technology and Tools
                </span>
                <Card.Title>
                  Start A Profitable Online Store In Just 12 Weeks
                </Card.Title>
                <Card.Text>
                  <span className={"author_name"}>Kevin Gundersen</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card>
              <div className={"card_image"}>
                <Card.Img
                  className={"card_img"}
                  variant="top"
                  // src={Demo}
                  src="https://images.pexels.com/photos/2182977/pexels-photo-2182977.jpeg"
                />
                <Badge>New</Badge>
              </div>
              <Card.Body>
                <span className={"info_text"}>
                  Session • 30d • Technology and Tools
                </span>
                <Card.Title>
                  Start A Profitable Online Store In Just 12 Weeks
                </Card.Title>
                <Card.Text>
                  <span className={"author_name"}>Kevin Gundersen</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card>
              <div className={"card_image"}>
                <Card.Img
                  className={"card_img"}
                  variant="top"
                  // src={Demo3}
                  src="https://images.pexels.com/photos/2182977/pexels-photo-2182977.jpeg"
                />
                <Badge>New</Badge>
              </div>
              <Card.Body>
                <span className={"info_text"}>
                  Session • 30d • Technology and Tools
                </span>
                <Card.Title>
                  Start A Profitable Online Store In Just 12 Weeks
                </Card.Title>
                <Card.Text>
                  <span className={"author_name"}>Kevin Gundersen</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
export default CardSlider;
