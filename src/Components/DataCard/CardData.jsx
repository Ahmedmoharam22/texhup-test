import "./CardData.css";
import { Blogs } from "../../data/dummyData";
export default function CardData() {
  return (
    <>
      <div className="row row-cols-4 row-cols-sm-6 row-cols-md-4 row-cols-lg-4 row-cols-xl-3 g-3">
        {Blogs.map((blog) => (
          <div  key={blog.id} className="card">
            <img src={blog.image} className="blog_image" alt="" />
            <div className="card-body">
              <h5 className="card-title">{blog.title}</h5>
              <p className="card-text">{blog.describtion} </p>
              <a href="#" className="btn text-decoration-underline ">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
