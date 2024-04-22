import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Slider() {
  return (
    <div className="slider__container">
      <Swiper loop={true}>
        <SwiperSlide>
          <div
            className="slide slider__fixed--height slide__align--center"
            style={{
              background:
                "rgba(0, 0, 0, 0) url(images/slider/bg/2.jpg) no-repeat scroll 0 0 / cover",
            }}
            data--black__overlay={6}
          >
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-lg-12">
                  <div className="slider__inner">
                    <h4>SCIENCE 1953</h4>
                    <h1>WE BUILD THE TRUST</h1>
                    <p>
                      On the other hand, we denounce with righteous indignation
                      and dislike men who are so beguiled and demoralized by the
                      charms of pleasure of the moment
                    </p>
                    <div className="slider__btn">
                      <a className="htc__btn" href="/contact">
                        CONTACT US
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="htc__slider__fornt__img">
              <img src="images/slider/fornt-img/1.png" alt="slider images" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="slide slider__fixed--height slide__align--center"
            style={{
              background:
                "rgba(0, 0, 0, 0) url(images/slider/bg/1.jpg) no-repeat scroll 0 0 / cover",
            }}
            data--black__overlay={6}
          >
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-lg-12">
                  <div className="slider__inner">
                    <h4>SCIENCE 1953</h4>
                    <h1>WE BUILD THE TRUST</h1>
                    <p>
                      On the other hand, we denounce with righteous indignation
                      and dislike men who are so beguiled and demoralized by the
                      charms of pleasure of the moment
                    </p>
                    <div className="slider__btn">
                      <a className="htc__btn" href="/contact">
                        CONTACT US
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="htc__slider__fornt__img">
              <img src="images/slider/fornt-img/1.png" alt="slider images" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
