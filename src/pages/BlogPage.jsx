import { useContext } from "react";
import { PageHeading, Newsletter, BlogCard } from "../components";
import { WebsiteContext } from "../store/Website-Store";

function BlogPage() {
  const { blogData } = useContext(WebsiteContext);
  return (
    <>
      <PageHeading pageName={"Blogs"} title={"Blogs"} />

      <section className="htc__blog__area ptb--150 bg__white">
        <div className="container">
          <div className="row htc__blog__wrap clearfix">
            {blogData.map((blog) => (
              <BlogCard blog={blog} key={blog.id} />
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}

export default BlogPage;
