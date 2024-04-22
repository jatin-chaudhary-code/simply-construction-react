function TeamCard({ team }) {
  return (
    <div className="col-lg-3 col-xl-3 col-md-6 col-sm-6 col-12">
      <div className="team foo">
        <div className="team__inner">
          <div className="team__thumb">
            <img src={team.img} alt="team image" />
          </div>
          <div className="team__hover__info">
            <ul className="team__social__link">
              <li>
                <a href="#" target="_blank">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <i className="fa fa-instagram" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <i className="fa fa-google-plus" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="team__details">
          <h2>
            <a href="#">{team.name}</a>
          </h2>
          <h4>{team.post}</h4>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
