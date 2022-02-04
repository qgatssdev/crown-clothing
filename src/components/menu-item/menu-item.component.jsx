import React from 'react';
import './menu-item.styles.scss';

import { useNavigate, useLocation } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, size, linkUrl, match }) => {
  let navigate = useNavigate();
  let location = useLocation();
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => navigate(`${location.pathname}/${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="content">
        <div className="title">{title.toUpperCase()}</div>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
