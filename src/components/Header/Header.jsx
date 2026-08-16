import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  selecHeader,
  setHeaderContent,
} from '../../reducers/header/headerSlice';

import {
  hideFooter,
  hideLogo,
  selecLogo,
  showFooter,
  showLogo,
} from '../../reducers/showFlags/showFlagsSlice';
import { showSpinner, hideSpinner } from '../../reducers/spinner/spinnerSlice';
import { selecUser, setUserData } from '../../reducers/user/userSlice';

import Menu from '../Menu/Menu';

import './Header.css';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isShowingLogo = useSelector(selecLogo);
  const [showRight, setShowRight] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const userData = useSelector(selecUser);
  const location = useLocation();
  const headerContent = useSelector(selecHeader);

  useEffect(() => {
    if (
      location.pathname !== '/profile' &&
      location.pathname !== '/mylots' &&
      !location.pathname.includes('/lot')
    ) {
      dispatch(showFooter());
      dispatch(showLogo());
      dispatch(setHeaderContent(null));
      setShowRight(true);
    } else {
      dispatch(hideFooter());
      dispatch(hideLogo());
      if (
        location.pathname !== '/mylots' &&
        !location.pathname.includes('/lot')
      )
        setShowRight(false);
    }
  }, [dispatch, location]);

  useEffect(() => {
    dispatch(showSpinner());
    const user = localStorage.getItem('user');
    if (user) {
      dispatch(setUserData(JSON.parse(user)));
    }
    dispatch(hideSpinner());
  }, [dispatch]);

  const goBackOrHome = () => {
    if (isShowingLogo) {
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
          onClick={goBackOrHome}
        ></div>
        {showRight &&
          (headerContent ? (
            <p>{headerContent}</p>
          ) : userData ? (
            <div onClick={() => setShowMenu(true)} className="height50">
              <img
                className="profile-pic"
                src="/icons/profile-mock.png"
                alt="profile"
              />
            </div>
          ) : (
            <Link className="signin-btn" to="/signin">
              <img src="/icons/user.svg" alt="" />
            </Link>
          ))}
      </header>
    </>
  );
};

export default Header;
