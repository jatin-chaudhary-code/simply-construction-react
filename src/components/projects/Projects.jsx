import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section className="htc__latest__project__area ptb--150 bg__white text__pos">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__title text-center">
              <h2 className="title__line">
                LATEST <span className="text--theme">PROJECTS</span>
              </h2>
              <p>
                On the other hand, we denounce with righteous indignation and
                dislike men who are so beguiled and demoralized by the charms of
                pleasure of the moment, so blinded by desire
              </p>
            </div>
          </div>
        </div>
        <div className="h1__project row mt--30">
          {/* Start Single Project */}
          <div className="col-lg-5 col-xl-5 col-md-12 col-12">
            <ProjectCard
              title={"CONSTRUCTION"}
              duration={"DURATION : 6 MONTH"}
              img="images/lst-project-3/1.jpg"
            />
          </div>
          {/* End Single Project */}
          <div className="col-lg-7 col-xl-7 col-md-12 col-12">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <ProjectCard
                  title={"CONSTRUCTION"}
                  duration={"DURATION : 6 MONTH"}
                  img="images/lst-project-3/2.jpg"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <ProjectCard
                  title={"CONSTRUCTION"}
                  duration={"DURATION : 6 MONTH"}
                  img="images/lst-project-3/3.jpg"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <ProjectCard
                  title={"CONSTRUCTION"}
                  duration={"DURATION : 6 MONTH"}
                  img="images/lst-project-3/4.jpg"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <ProjectCard
                  title={"CONSTRUCTION"}
                  duration={"DURATION : 6 MONTH"}
                  img="images/lst-project-3/5.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
