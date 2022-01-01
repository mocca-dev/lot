import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';

import './Menu.css';

const Menu = ({ showMenu, setShowMenu }) => {
  const wrapperRef = useRef(null);
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

  useEffect(() => {
    function handleClickOutside(event) {
      if (showMenu && wrapperRef && wrapperRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return function cleanup() {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  return (
    <>
      {showMenu && (
        <span>
          <span ref={wrapperRef} className="menu-backdrop" />
          <div className="menu">
            <ul>
              {menuList.map((menuItem) => (
                <li onClick={() => menuClickItem(menuItem.action)}>
                  {menuItem.label}
                </li>
              ))}
            </ul>
          </div>
        </span>
      )}{' '}
    </>
  );
};

export default Menu;
