import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item event-logo">
        Event App
      </Link>
      <div className="right menu nav-item">
        <p>
          <Link to="/events" className="item">
            Browse Events
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Header;
