import { useContext } from "react";
import TeamCard from "./TeamCard";
import { WebsiteContext } from "../../store/Website-Store";

function MyTeam() {
  const { teamData } = useContext(WebsiteContext);
  return (
    <section className="htc__team__area pb--120 bg__white">
      <div className="htc__team__container">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section__title text-center">
                <h2 className="title__line">
                  OUR <span className="text--theme">TEAM</span>
                </h2>
                <p>
                  On the other hand, we denounce with righteous indignation and
                  dislike men who are so beguiled and demoralized by the charms
                  of pleasure of the moment, so blinded by desire
                </p>
              </div>
            </div>
          </div>
          <div className="row htc__team__wrap clearfix mt--30">
            {teamData.map((team) => (
              <TeamCard team={team} key={team.name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyTeam;
