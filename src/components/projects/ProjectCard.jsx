function ProjectCard({ title, duration, img }) {
  return (
    <div className="project__itm foo">
      <div className="project__thumb">
        <a href="#">
          <img src={img} alt="project images" />
        </a>
        <div className="project__hover__info">
          <div className="project__action">
            <h2>
              <a href="#">{title}</a>
            </h2>
            <h4>{duration}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
