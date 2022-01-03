import { useState } from 'react';
import { useNavigate } from 'react-router';

import OutsideClick from './../OutsideClick/OutsideClick';
import './Menu.css';

const Menu = ({ showMenu, setShowMenu }) => {
  const [menuList] = useState([
    { label: 'Mi perfil', action: '/profile' },
    { label: 'Mis publicaciones', action: '/mylots' },
    { label: 'Cerrar sesión', action: '' },
  ]);
  const navigate = useNavigate();

  const menuClickItem = (action) => {
    setShowMenu(false);
    navigate(action);
  };

  return (
    showMenu && (
      <OutsideClick action={() => setShowMenu(false)}>
        <div className="menu">
          <ul>
            {menuList.map((menuItem) => (
              <li onClick={() => menuClickItem(menuItem.action)}>
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
