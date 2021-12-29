import React, { useEffect, useState } from 'react';

import './Footer.css';

const Footer = ({ items }) => {
  const [xOffset, setXOffset] = useState('');

  useEffect(() => {
    setXOffset(document.querySelector('.initial-item').offsetLeft);
  }, []);

  const positionMarker = (e) => {
    const { currentTarget } = e;

    if (currentTarget.tagName === 'DIV') {
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
          <div
            key={id}
            className={
              'item-container ' + (item.initial ? 'initial-item active' : '')
            }
            onClick={(e) => positionMarker(e)}
          >
            <img src={`/icons/${item.icon}.svg`} alt="" />
          </div>
        ))}
      </nav>
    </footer>
  );
};

export default Footer;
