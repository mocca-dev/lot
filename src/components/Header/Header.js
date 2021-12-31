import React, { useEffect, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import Store from '../../store';

import './Header.css';

const Header = () => {
  const { dispatch, state } = useContext(Store);
  const navigate = useNavigate();

  const location = useLocation();
  useEffect(() => {
    if (location.pathname !== '/profile') {
      dispatch({ type: 'SHOW_FOOTER' });
      dispatch({ type: 'SHOW_LOGO' });
    } else {
      dispatch({ type: 'HIDE_FOOTER' });
      dispatch({ type: 'HIDE_LOGO' });
    }
  }, [dispatch, location]);

  const goBackOrHome = () => {
    if (state.showLogo) {
      dispatch({
        type: 'SET_MARKER_POS',
        payload: 'search',
      });
      navigate('/');
    } else {
      navigate(-1);
    }
  };

  return (
    <header>
      <img
        className={'left-img ' + (state.showLogo ? 'big-size' : 'normal-size')}
        src={state.showLogo ? '/icons/logo512.png' : '/icons/left-arrow.svg'}
        alt="back"
        onClick={() => goBackOrHome()}
      />
      <Link to="/profile">
        <img
          className="profile-pic"
          src="/icons/profile-mock.png"
          alt="profile"
        />
      </Link>
    </header>
  );
};

export default Header;
