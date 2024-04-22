import { useContext } from "react";
import ServiceCard from "./ServiceCard";
import { WebsiteContext } from "../../store/Website-Store";

function ServiceInner() {
  const { serviceData } = useContext(WebsiteContext);

  return (
    <section className="htc__service__area service__page bg__gray ptb--100">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__title text-center">
              <h2 className="title__line">
                OUR <span className="text--theme">SERVICES</span>
              </h2>
              <p>
                On the other hand, we denounce with righteous indignation and
                dislike men who are so beguiled and demoralized by the charms of
                pleasure of the moment, so blinded by desire
              </p>
            </div>
          </div>
        </div>
        <div className="row service__section__wrap clearfix">
          {serviceData.map((item, index) => (
            <ServiceCard
              cardImg={item.cardImg}
              title={item.title}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceInner;
