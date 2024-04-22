function ServiceCard({ cardImg, title }) {
  return (
    <div className="col-lg-4 col-xl-4 col-md-4 col-sm-6 col-12">
      <div className="service">
        <div className="service__thumb">
          <a href="#">
            <img src={cardImg} alt="service images" />
          </a>
          <div className="service__hover">
            <div className="service__action">
              <a href="#">DETAILS</a>
            </div>
          </div>
        </div>
        <div className="service__details">
          <h2>
            <a href="#">{title}</a>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
