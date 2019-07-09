import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item event-logo">
        Events App
      </Link>
      <div className="right menu header-item">
        <Link to="/events" className="item">
          Browse Events
        </Link>
      </div>
    </div>
  );
};

export default Header;
