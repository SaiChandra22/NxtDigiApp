import { Link } from "react-router-dom";
import "./index.css";

const blogsList = [
  {
    id: 1,
    title: "Blog 1",
    description: "A high quality solution beautifully designed for startups",
    publishedDate: "Aug 2nd",
  },
  {
    id: 2,
    title: "Blog 2",
    description:
      "A high quality solution beautifully designed for startups and Bussiness schools",
    publishedDate: "Mar 1st",
  },
  {
    id: 3,
    title: "Blog 3",
    description: "A high quality solution beautifully designed for startups",
    publishedDate: "Jan 2nd",
  },
  {
    id: 4,
    title: "Blog 4",
    description:
      "A high quality solution beautifully designed for startups and Bussiness schools. ",
    publishedDate: "Dec 24th",
  },
  {
    id: 5,
    title: "Blog 5",
    description: "A high quality solution beautifully designed for startups",
    publishedDate: "Nov 10th",
  },
];

const BlogList = () => {
  return (
    <ul className="blog-list">
      {blogsList.map((eachBlog) => {
        const { title, description, publishedDate } = eachBlog;
        return (
          <li key={title} className="blog-item">
            <div className="blog-details-container">
              <h1 className="blog-title">{title}</h1>
              <p className="blog-published-date">{publishedDate}</p>
            </div>
            <p className="blog-description">
              {description}... <Link to="/blog">Read More</Link>
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default BlogList;
