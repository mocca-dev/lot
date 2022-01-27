import { useContext, useState } from 'react';
import { useNavigate } from 'react-router';

import './Menu.css';
import OutsideClick from './../OutsideClick/OutsideClick';
import Store from '../../store';

const showConfirmModal = (dispatch) => {
  const modalConfig = {
    title: '¿Está seguro de cerrar sesión?',
    show: true,
    type: undefined,
    url: '',
    btns: {
      left: {
        action: () => dispatch({ type: 'HIDE_MODAL' }),
        text: 'Cancelar',
      },
      right: {
        action: () => {
          // setUser(null);
          // localStorage.setItem('user', null);
          // history.push('/ingreso');
          dispatch({ type: 'HIDE_MODAL' });
        },
        text: 'Aceptar',
      },
    },
  };
  dispatch({ type: 'SET_MODAL', payload: modalConfig });
};

const Menu = ({ showMenu, setShowMenu }) => {
  const { dispatch } = useContext(Store);
  const [menuList] = useState([
    { label: 'Mi perfil', action: '/profile' },
    { label: 'Mis publicaciones', action: '/mylots' },
    { label: 'Cerrar sesión', action: () => showConfirmModal(dispatch) },
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
