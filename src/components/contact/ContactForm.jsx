function ContactForm() {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="htc__contact__form__wrap">
          <h2 className="title__line--5">SEND US A MESSAGE</h2>
          <div className="contact-form-wrap">
            <form
              id="contact-form"
              action="https://whizthemes.com/nazmul/php/mail.php"
              method="post"
            >
              <div className="single-contact-inner">
                <div className="single-contact-form">
                  <div className="contact-box name">
                    <span>Your Name*</span>
                    <input type="text" name="name" />
                  </div>
                  <div className="contact-box email">
                    <span>Your Email*</span>
                    <input type="email" name="email" />
                  </div>
                  <div className="contact-box subject">
                    <span>Subject*</span>
                    <input type="text" name="subject" />
                  </div>
                </div>
                <div className="single-contact-form">
                  <div className="contact-box message">
                    <span>Message*</span>
                    <textarea name="message" defaultValue={""} />
                  </div>
                  <div className="contact-btn">
                    <button type="submit" className="htc__btn btn--theme">
                      SEND NOW
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="form-output">
            <p className="form-messege" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
