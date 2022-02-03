import { useState } from 'react';
import { useNavigate } from 'react-router';

import './Menu.css';
import OutsideClick from './../OutsideClick/OutsideClick';
import useSignOutModal from '../../hooks/useSignOutModal';

const Menu = ({ showMenu, setShowMenu }) => {
  const showModal = useSignOutModal();

  const [menuList] = useState([
    { label: 'Mi perfil', action: '/profile' },
    { label: 'Mis publicaciones', action: '/mylots' },
    { label: 'Cerrar sesión', action: () => showModal() },
  ]);
  const navigate = useNavigate();

  const menuClickItem = (action) => {
    setShowMenu(false);

    if (typeof action === 'string') {
      navigate(action);
    } else {
      action();
    }
  };

  return (
    showMenu && (
      <OutsideClick action={() => setShowMenu(false)}>
        <div className="menu">
          <ul>
            {menuList.map((menuItem) => (
              <li
                key={menuItem.label}
                onClick={() => menuClickItem(menuItem.action)}
              >
                {menuItem.label}
              </li>
            ))}
          </ul>
        </div>
      </OutsideClick>
    )
  );
};

export default Menu;
