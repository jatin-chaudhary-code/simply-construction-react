function Newsletter(){
    return <section className="htc__newsletter__area ptb--90 bg__gray">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="newsletter__wrap">
            <h2 className="title__line">
              SUBSCRIBE <span className="text--theme">NEWSLETTER</span>
            </h2>
            <h4>Subscribe our newsletter and get latest update</h4>
            <div className="newsletter__form">
              <div className="input__box">
                <div id="mc_embed_signup">
                  <form
                    action="http://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef"
                    method="post"
                    id="mc-embedded-subscribe-form"
                    name="mc-embedded-subscribe-form"
                    className="validate"
                    target="_blank"
                    noValidate=""
                  >
                    <div
                      id="mc_embed_signup_scroll"
                      className="htc__news__inner"
                    >
                      <div className="news__input">
                        <input
                          type="email"
                          defaultValue=""
                          name="EMAIL"
                          className="email"
                          id="mce-EMAIL"
                          placeholder="Email Address"
                          required=""
                        />
                      </div>
                      {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                      <div
                        style={{ position: "absolute", left: "-5000px" }}
                        aria-hidden="true"
                      >
                        <input
                          type="text"
                          name="b_6bbb9b6f5827bd842d9640c82_05d85f18ef"
                          tabIndex={-1}
                          defaultValue=""
                        />
                      </div>
                      <div className="clearfix subscribe__btn">
                        <input
                          type="submit"
                          defaultValue="SUBSCRIBE NOW"
                          name="subscribe"
                          id="mc-embedded-subscribe"
                          className="bst__btn btn--white__color"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="newsletter__thumb">
      <div className="newsletter__thumb__inner">
        <img src="images/others/1.png" alt="newsletter img" />
      </div>
    </div>
  </section>;
}

export default Newsletter;