import OfferCard from "./OfferCard";

function Offer() {
  const cardData = [
    {
      cardTitle: "TOP RATED",
      cardContent:
        "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled demoralized",
      cardImg: "images/others/icon-2/1.png",
    },
    {
      cardTitle: "BEST QUALITY",
      cardContent:
        "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled demoralized",
      cardImg: "images/others/icon-2/2.png",
    },
    {
      cardTitle: "LOW COST",
      cardContent:
        "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled demoralized",
      cardImg: "images/others/icon-2/3.png",
    },
  ];

  return (
    <section className="htc__offer__area htc__offer--2 pb--120 bg__gray">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12">
            <OfferCard cardData={cardData[0]} />
          </div>
          <div className="col-lg-4 col-md-6 col-12 xmt-40">
            <OfferCard cardData={cardData[1]} />
          </div>
          <div className="col-lg-4 col-md-6 col-12 smt-40 xmt-40">
            <OfferCard cardData={cardData[2]} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Offer;
