import { Link } from "react-router-dom";

import "./index.css";

const Home = () => (
  <div className="home-container">
    <div className="home-content">
      <h1 className="home-heading">Welcome to NxtDigi</h1>
      <img
        src="https://images.goabroad.com/image/upload/images2/program_content/4-1557286445.jpg"
        alt="home-img"
        className="home-mobile-img"
      />
      <p className="home-description">
          At NxtDigi, we are committed to delivering excellence through
          innovation, transparency, and collaboration. Our core values shape
          every aspect of our work, ensuring a client-focused and results-driven
          approach.
      </p>
      <Link to="/services">
        <button type="button" className="explore-our-services-button">
          Explore Our Services
        </button>
      </Link>
    </div>
    <img
      src="https://images.goabroad.com/image/upload/images2/program_content/4-1557286445.jpg"
      alt="home-img"
      className="home-desktop-img"
    />
  </div>
);

export default Home;
