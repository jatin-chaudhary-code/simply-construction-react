import { Swiper, SwiperSlide } from "swiper/react";

function Testimonial() {
  return (
    <section
      className="htc__testimonial__area ptb--130"
      data--gray__overlay="9.5"
      style={{
        background:
          "rgba(0, 0, 0, 0) url(images/bg/1.jpg) no-repeat fixed center center / cover",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-xl-5 col-md-12 col-12">
            <div className="htc__testimonial__wrap">
              <div className="section__title text-left">
                <h2 className="title__line">
                  CLIENTS <span className="text--theme">SAYS</span>
                </h2>
                <p>
                  On the other hand, we denounce with righteous indignation and
                  dislike men who are so beguiled and demoralized by the charms
                  of pleasur
                </p>
              </div>
              <div className="testimonial__activation clearfix">
                <Swiper loop={true}>
                  <SwiperSlide>
                    <div className="testimonial">
                      <div className="testimonial__thumb">
                        <img src="images/test/client/1.jpg" alt="clint image" />
                      </div>
                      <div className="testimonial__details">
                        <div className="tes__icon">
                          <i className="fa fa-quote-right" />
                        </div>
                        <p>
                          On the other hand, we denounce with righteous
                          indignation and the tdislike men who are beguiled{" "}
                        </p>
                        <h2>
                          <a href="#">Ken Williams</a>
                        </h2>
                        <h4>CEO, Alves</h4>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="testimonial">
                      <div className="testimonial__thumb">
                        <img src="images/test/client/1.jpg" alt="clint image" />
                      </div>
                      <div className="testimonial__details">
                        <div className="tes__icon">
                          <i className="fa fa-quote-right" />
                        </div>
                        <p>
                          On the other hand, we denounce with righteous
                          indignation and the tdislike men who are beguiled{" "}
                        </p>
                        <h2>
                          <a href="#">Ken Williams</a>
                        </h2>
                        <h4>CEO, Alves</h4>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-6  offset-xl-1 col-md-12 col-12 smt-40">
            <div className="reguest__quote">
              <div className="section__title text-left">
                <h2 className="title__line">
                  REQUEST A <span className="text--theme">QUOTE</span>
                </h2>
                <p>
                  On the other hand, we denounce with righteous indignation and
                  dislike men who are so beguiled and demoralized by the charms
                  of pleasur
                </p>
              </div>
              <form
                id="contact-form"
                action="https://whizthemes.com/nazmul/php/mail.php"
                method="post"
              >
                <div className="clint__comment__form">
                  <div className="single__cl__form">
                    <input name="name" type="text" placeholder="Name" />
                    <input name="email" type="email" placeholder="Email" />
                  </div>
                  <div className="single__cl__form">
                    <input name="telephone" type="tel" placeholder="Phone" />
                    <input name="subject" type="text" placeholder="Subject" />
                  </div>
                  <div className="single__cl__message">
                    <textarea
                      name="message"
                      placeholder="Massage"
                      defaultValue={""}
                    />
                  </div>
                  <div className="clint__submit__btn">
                    <button className="submit htc__btn" type="submit">
                      SEND MESSAGE
                    </button>
                  </div>
                </div>
              </form>
              <p className="form-messege" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
