import { useContext, useEffect } from 'react';
import Btn from '../../components/Btn/Btn';
import Store from '../../store';

import './Profile.css';

const Profile = () => {
  const { dispatch } = useContext(Store);

  useEffect(() => {
    dispatch({ type: 'SET_SUB_HEADER', payload: 'Perfil' });
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
        <Btn label="Cerrar sesión" />
      </footer>
    </>
  );
};

export default Profile;
