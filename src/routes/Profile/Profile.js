import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import Btn from '../../components/Btn/Btn';
import useSignOutModal from '../../hooks/useSignOutModal';
import { hideFixedContent } from '../../reducers/showFlags/showFlagsSlice';
import { set } from '../../reducers/subHeader/subHeaderSlice';

import './Profile.css';

const Profile = () => {
  const dispatch = useDispatch();
  const showModal = useSignOutModal();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(set(t('profileSubheader')));
    dispatch(hideFixedContent());
  }, [dispatch, t]);

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
      <footer className="footer-profile">
        <Btn label={t('signOutBtn')} onClick={() => showModal()} />
      </footer>
    </>
  );
};

export default Profile;
