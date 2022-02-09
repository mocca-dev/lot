import React, { useEffect, useContext, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import {
  hideFooter,
  hideLogo,
  selecLogo,
  showFooter,
  showLogo,
} from '../../reducers/showFlags/showFlagsSlice';
import { selecUser } from '../../reducers/user/userSlice';

import Store from '../../store';
import Menu from '../Menu/Menu';

import './Header.css';

const Header = () => {
  const { dispatch } = useContext(Store);
  const disp = useDispatch();
  const navigate = useNavigate();
  const isShowingLogo = useSelector(selecLogo);
  const [showRight, setShowRight] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const userData = useSelector(selecUser);
  const location = useLocation();

  useEffect(() => {
    if (
      location.pathname !== '/profile' &&
      location.pathname !== '/mylots' &&
      !location.pathname.includes('/lot')
    ) {
      disp(showFooter());
      disp(showLogo());
      setShowRight(true);
    } else {
      disp(hideFooter());
      disp(hideLogo());
      if (
        location.pathname !== '/mylots' &&
        !location.pathname.includes('/lot')
      )
        setShowRight(false);
    }
  }, [disp, location]);

  const goBackOrHome = () => {
    if (isShowingLogo) {
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
        <div
          className={'left-img ' + (isShowingLogo ? 'big-size' : 'normal-size')}
          onClick={() => goBackOrHome()}
        ></div>
        {userData ? (
          showRight && (
            <div onClick={() => setShowMenu(true)} className="height50">
              <img
                className="profile-pic"
                src="/icons/profile-mock.png"
                alt="profile"
              />
            </div>
          )
        ) : (
          <Link className="signin-btn" to="/signin">
            <img src="/icons/user.svg" alt="" />
          </Link>
        )}
      </header>
    </>
  );
};

export default Header;
