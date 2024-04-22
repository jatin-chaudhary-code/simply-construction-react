function ContactInfo() {
  return (
    <div className="row pb--100">
      <div className="col-md-12">
        <div className="htc__contact__inner">
          <h2 className="title__line--5">CONTACT INFORMATION</h2>
          <p>
            On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled demoralized On the er hand, we
            denounce with pain and trouble that are bound to ensue; and equal
            blame belongs to those{" "}
          </p>
        </div>
        <div className="htc__address__container">
          {/* Start Single Address */}
          <div className="ct__address">
            <div className="ct__address__icon">
              <i className="zmdi zmdi-pin" />
            </div>
            <div className="ct__details">
              <p>
                Stock Building, 125 Main Street <br /> 1st Lane, San Francisco,
                USA
              </p>
            </div>
          </div>
          {/* End Single Address */}
          {/* Start Single Address */}
          <div className="ct__address">
            <div className="ct__address__icon">
              <i className="fa fa-phone" />
            </div>
            <div className="ct__details">
              <p>
                <a href="#">(001) 24568 365 987)</a>
              </p>
              <p>
                <a href="#">(001) 65897 569 784)</a>
              </p>
            </div>
          </div>
          {/* End Single Address */}
          {/* Start Single Address */}
          <div className="ct__address smt-20">
            <div className="ct__address__icon">
              <i className="fa fa-globe" />
            </div>
            <div className="ct__details">
              <p>
                <a href="#">infor@example.com</a>
              </p>
              <p>
                <a href="#">www.example.com</a>
              </p>
            </div>
          </div>
          {/* End Single Address */}
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
