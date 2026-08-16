import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';

import './Menu.css';
import OutsideClick from './../OutsideClick/OutsideClick';
import useSignOutModal from '../../hooks/useSignOutModal';
import MenuItem from './MenuItem/MenuItem';

const Menu = ({ showMenu, setShowMenu }) => {
  const showModal = useSignOutModal();
  const [isInEnglish, setIsInEnglish] = useState(false);
  // const [isLightMode, setIsLightMode] = useState(true);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  // useEffect(() => {
  //   document.documentElement.setAttribute(
  //     'data-theme',
  //     isLightMode ? 'ligth' : 'dark'
  //   );
  // }, [isLightMode]);

  useEffect(() => {
    i18n.changeLanguage(isInEnglish ? 'en' : 'es');
  }, [i18n, isInEnglish]);

  return (
    showMenu && (
      <OutsideClick action={() => setShowMenu(false)}>
        <div className="menu">
          <ul>
            <MenuItem
              label={t('menuMyProfile')}
              action={() => {
                navigate('/profile');
                setShowMenu(false);
              }}
            />
            <MenuItem
              label={t('menuMyPosts')}
              action={() => {
                navigate('/mylots');
                setShowMenu(false);
              }}
            />
            {/* <MenuItem
              label={isLightMode ? 'Modo Claro' : 'Modo Oscuro'}
              action={() => setIsLightMode(!isLightMode)}
            /> */}
            <MenuItem
              label={isInEnglish ? 'English' : 'Español'}
              action={() => setIsInEnglish(!isInEnglish)}
            />
            <MenuItem
              label={t('menuSignOut')}
              action={() => {
                setShowMenu(false);
                showModal();
              }}
            />
          </ul>
        </div>
      </OutsideClick>
    )
  );
};

export default Menu;
