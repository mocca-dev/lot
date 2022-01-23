import { useContext, useEffect } from 'react';
import Btn from '../../components/Btn/Btn';
import Store from '../../store';

import './Profile.css';

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

const Profile = () => {
  const { dispatch } = useContext(Store);

  useEffect(() => {
    dispatch({ type: 'SET_SUB_HEADER', payload: 'Perfil' });
    dispatch({ type: 'HIDE_FIXED_CONTENT' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <main className="profile-screen-container">
        <div className="content-container">
          <img
            className="profile-pic"
            src="/icons/profile-mock.png"
            alt="profile"
          />
          <h2>Juan Perez</h2>
          <span>juanperez@gmail.com</span>
        </div>
      </main>
      <footer className="footer-profile-profile">
        <Btn label="Cerrar sesión" onClick={() => showConfirmModal(dispatch)} />
      </footer>
    </>
  );
};

export default Profile;
