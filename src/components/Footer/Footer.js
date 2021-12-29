import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

const Footer = ({ items }) => {
  const [xOffset, setXOffset] = useState('');

  useEffect(() => {
    setXOffset(document.querySelector('.initial-item').offsetLeft);
  }, []);

  const positionMarker = (e) => {
    const { currentTarget } = e;

    if (currentTarget.tagName === 'A') {
      document.querySelectorAll('.item-container').forEach((item) => {
        item.classList.remove('active');
      });
      setXOffset(currentTarget.offsetLeft + 'px');

      currentTarget.classList.toggle('active');
    }
  };

  return (
    <footer className="footer-container">
      <nav className="nav-container">
        <div id="marker" style={{ left: xOffset }}></div>
        {items.map((item, id) => (
          <Link
            key={id}
            className={
              'item-container ' + (item.initial ? 'initial-item active' : '')
            }
            onClick={(e) => positionMarker(e)}
            to={item.route}
          >
            <img src={`/icons/${item.icon}.svg`} alt="" />
          </Link>
        ))}
      </nav>
    </footer>
  );
};

export default Footer;
