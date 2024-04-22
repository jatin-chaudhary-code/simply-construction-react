import { useContext } from "react";
import { WebsiteContext } from "../../store/Website-Store";
import BlogCard from "./BlogCard";

function Blog() {
  const { blogData } = useContext(WebsiteContext);
  return (
    <section className="htc__blog__area pt--150 bg__white">
      <div className="container">
        <div className="row">
          <div className="section__title text-center">
            <h2 className="title__line">
              LATEST <span className="text--theme">BLOG</span>
            </h2>
            <p>
              On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized by the charms of
              pleasure of the moment, so blinded by desire
            </p>
          </div>
        </div>
        <div className="row htc__blog__wrap mt--30 clearfix">
          {blogData.slice(0, 3).map((blog, index) => (
            <BlogCard blog={blog} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
