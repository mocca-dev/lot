import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Btn from '../../components/Btn/Btn';
import { setModal } from '../../reducers/modal/modalSlice';
import { hideFixedContent } from '../../reducers/showFlags/showFlagsSlice';
import { set } from '../../reducers/subHeader/subHeaderSlice';

import './Profile.css';

const showConfirmModal = (dispatch) => {
  const modalConfig = {
    title: '¿Está seguro de cerrar sesión?',
    show: true,
    type: 'CONFIRM',
    action: 'SIGN_OUT',
    url: '',
    btns: {
      left: {
        text: 'Cancelar',
      },
      right: {
        text: 'Aceptar',
      },
    },
  };
  dispatch(setModal(modalConfig));
};

const Profile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(set('Perfil'));
    dispatch(hideFixedContent());
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
