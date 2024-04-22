function OfferCard({cardData}){
    return <div className="offer">
    <div className="offer__icon">
      <img src={cardData.cardImg} alt="icon images" />
    </div>
    <div className="offer__details">
      <h2>
        <a href="#">{cardData.cardTitle}</a>
      </h2>
      <p>{cardData.cardContent}</p>
    </div>
  </div>
}

export default OfferCard;