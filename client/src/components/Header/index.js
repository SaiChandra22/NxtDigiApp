import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="header-container">
    <div className="logo-and-title-container">
      <img
        alt="NxtDigi"
        className="logo"
        src="https://images.assetsdelivery.com/compings_v2/wikagraphic/wikagraphic2011/wikagraphic201131244.jpg"
      />
      <h1 className="title">NxtDigi</h1>
    </div>
    <ul className="nav-items-list">
      <li className="link-item">
        <Link className="route-link" to="/">
          HOME
        </Link>
      </li>
      <li className="link-item">
        <Link className="route-link" to="/about">
          ABOUT
        </Link>
      </li>
      <li className="link-item">
        <Link className="route-link" to="/blog">
          BLOG
        </Link>
      </li>
      <li className="link-item">
        <Link className="route-link" to="/services">
          SERVICES
        </Link>
      </li>
      <li className="link-item">
        <Link className="route-link" to="/contact">
          CONTACT
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
