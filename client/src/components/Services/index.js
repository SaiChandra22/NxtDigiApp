import "./index.css";

const Services = () => (
  <div className="service-container">
    <div className="service-card">
      <div className="service-name">
        Social media <br />
        management
      </div>
      <ul className="bullet-points">
        <li className="list-item">Targeting audience</li>
        <li className="list-item">Community building</li>
        <li className="list-item">Social media posts</li>
        <li className="list-item">Photo and video production</li>
        <li className="list-item">Ad campaigns</li>
        <li className="list-item">Influencer outreach</li>
      </ul>
      <button className="select-button">Select</button>
    </div>
    <div className="service-card">
      <div className="service-name">
        Content <div>writing</div>
      </div>
      <ul className="bullet-points">
        <li className="list-item">Blog posts</li>
        <li className="list-item">Product descriptions</li>
        <li className="list-item">Newsletter</li>
        <li className="list-item">'About me' page</li>
        <li className="list-item">
          Copy for print and digital promo materials
        </li>
      </ul>
      <button className="select-button">Select</button>
    </div>
    <div className="service-card">
      <div className="service-name">
        Marketing <div>consulting</div>
      </div>
      <ul className="bullet-points">
        <li className="list-item">Evaluation of current marketing</li>
        <li className="list-item">Creating digital media strategy</li>
        <li className="list-item">Branding</li>
        <li className="list-item">Advertising</li>
        <li className="list-item">Search engine optimization</li>
      </ul>
      <button className="select-button">Select</button>
    </div>
  </div>
);

export default Services;
