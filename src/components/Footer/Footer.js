import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import Store from '../../store';

import './Footer.css';

const Footer = ({ items }) => {
  const { dispatch, state } = useContext(Store);
  const [xOffset, setXOffset] = useState('');

  useEffect(() => {
    if (state.initialMarker) {
      const markerNode = document.querySelector(`#${state.initialMarker}`);
      document.querySelectorAll('.item-container').forEach((item) => {
        item.classList.remove('active');
      });
      markerNode?.classList.toggle('active');
      setXOffset(markerNode?.offsetLeft);
    }
  }, [setXOffset, state.initialMarker]);

  const positionMarker = (e, itemName) => {
    if (e.currentTarget.tagName === 'A') {
      dispatch({
        type: 'SET_MARKER_POS',
        payload: itemName,
      });
    }
  };

  return (
    <footer className="footer-container">
      <nav className="nav-container">
        <div id="marker" style={{ left: xOffset }}></div>
        {items.map((item, id) => (
          <Link
            key={id}
            className={'item-container ' + (item.initial ? 'initial-item' : '')}
            id={item.icon}
            onClick={(e) => positionMarker(e, item.icon)}
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
