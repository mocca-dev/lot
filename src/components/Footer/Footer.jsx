import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import './Footer.css';

const Footer = ({ items }) => {
  const [xOffset, setXOffset] = useState('');
  const location = useLocation();

  useEffect(() => {
    let { pathname } = location;
    if (!pathname.includes('/lot/')) {
      if (pathname === '/') pathname = '/search';
      const markerNode = document.querySelector(
        `#${pathname.replace('/', '')}`
      );

      document.querySelectorAll('.item-container').forEach((item) => {
        item.classList.remove('active');
      });
      markerNode?.classList.toggle('active');
      setXOffset(markerNode?.offsetLeft);
    }
  }, [setXOffset, location]);

  return (
    <footer className="footer-container">
      <nav className="nav-container">
        <div id="marker" style={{ left: xOffset }}></div>
        {items.map((item, id) => (
          <Link
            key={id}
            className={'item-container ' + (item.initial ? 'initial-item' : '')}
            id={item.icon}
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
