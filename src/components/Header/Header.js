import React, { useEffect, useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Store from '../../store';
import Menu from '../Menu/Menu';

import './Header.css';

const Header = () => {
  const { dispatch, state } = useContext(Store);
  const navigate = useNavigate();
  const [showRight, setShowRight] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const location = useLocation();
  useEffect(() => {
    if (location.pathname !== '/profile' && location.pathname !== '/mylots') {
      dispatch({ type: 'SHOW_FOOTER' });
      dispatch({ type: 'SHOW_LOGO' });
      setShowRight(true);
    } else {
      dispatch({ type: 'HIDE_FOOTER' });
      dispatch({ type: 'HIDE_LOGO' });
      if (location.pathname !== '/mylots') setShowRight(false);
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
    <>
      <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
      <header>
        <img
          className={
            'left-img ' + (state.showLogo ? 'big-size' : 'normal-size')
          }
          src={state.showLogo ? '/icons/logo.png' : '/icons/left-arrow.svg'}
          alt="back"
          onClick={() => goBackOrHome()}
        />
        {showRight && (
          <div onClick={() => setShowMenu(true)} className="height50">
            <img
              className="profile-pic"
              src="/icons/profile-mock.png"
              alt="profile"
            />
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
