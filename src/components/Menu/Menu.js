import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

import './Menu.css';
import OutsideClick from './../OutsideClick/OutsideClick';
import useSignOutModal from '../../hooks/useSignOutModal';
import MenuItem from './MenuItem/MenuItem';

const Menu = ({ showMenu, setShowMenu }) => {
  const showModal = useSignOutModal();
  const [isLightMode, setIsLightMode] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      isLightMode ? 'ligth' : 'dark'
    );
  }, [isLightMode]);

  return (
    showMenu && (
      <OutsideClick action={() => setShowMenu(false)}>
        <div className="menu">
          <ul>
            <MenuItem label="Mi perfíl" action={() => navigate('/profile')} />
            <MenuItem
              label={'Mis publicaciones'}
              action={() => navigate('/mylots')}
            />
            <MenuItem
              label={isLightMode ? 'Modo Claro' : 'Modo Oscuro'}
              action={() => setIsLightMode(!isLightMode)}
            />
            <MenuItem label={'Cerrar sesión'} action={() => showModal()} />
          </ul>
        </div>
      </OutsideClick>
    )
  );
};

export default Menu;
