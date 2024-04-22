function BlogCard({ blog }) {
  return (
    <div className="col-lg-4 col-xl-4 col-md-6 col-12">
      <div className="blog foo">
        <div className="blog__thumb">
          <a href="#">
            <img src={blog.img} alt="blog image" />
          </a>
          <div className="blog__hover__info">
            <ul className="blog__meta">
              <li>
                By : <a href="#">{blog.author}</a>
              </li>
              <li>{blog.date}</li>
              <li>
                <a href="#">Comments {blog.comments}</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="blog__details">
          <h2>
            <a href="#">
              Lorem ipsum dolor sit amet, cotur adipiscing elit, sed do eiusmod{" "}
            </a>
          </h2>
          <div className="blog__btn">
            <a href="#">
              READ MORE
              <i className="zmdi zmdi-long-arrow-right" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
