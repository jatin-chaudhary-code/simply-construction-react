import ServiceCard from "./ServiceCard";
import { WebsiteContext } from "../../store/Website-Store";
import { useContext } from "react";

function Service() {
  const { serviceData } = useContext(WebsiteContext);

  return (
    <>
      <section className="htc__service__area service--2 bg__gray">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 service__section__wrap clearfix">
              <div className="row">
                {/* Start Single Service */}
                <div className="col-lg-5 col-xl-4 col-md-12 col-12">
                  <div className="service__thumb">
                    <img src="images/about/2.jpg" alt="about image" />
                  </div>
                </div>
                {/* End Single Service */}
                <div className="col-lg-7 col-xl-8 col-md-12 col-12 h1__service pt--40 pb--30">
                  <div className="row">
                    <div className="col-12">
                      <div className="section__title text-left">
                        <h2 className="title__line">
                          OUR <span className="text--theme">SERVICES</span>
                        </h2>
                        <p>
                          On the other hand, we denounce with righteous
                          indignation and dislike men who are so beguiled and
                          demoralized by the charms of pleasure of the moment,
                          so blinded by desire, that they cannot foresee the
                          pain and trouble
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    {serviceData.slice(0, 3).map((item, index) => (
                      <ServiceCard
                        cardImg={item.cardImg}
                        title={item.title}
                        key={index}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Service;
