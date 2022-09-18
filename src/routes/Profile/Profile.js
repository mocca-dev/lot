import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import Btn from '../../components/Btn/Btn';
import useSignOutModal from '../../hooks/useSignOutModal';
import { hideFixedContent } from '../../reducers/showFlags/showFlagsSlice';
import { set } from '../../reducers/subHeader/subHeaderSlice';

import './Profile.css';
import { useSelector } from 'react-redux';
import { selecUser } from '../../reducers/user/userSlice';

const Profile = () => {
  const dispatch = useDispatch();
  const showModal = useSignOutModal();
  const userData = useSelector(selecUser);
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
          <span>{userData.email}</span>
        </div>
      </main>
      <footer className="footer-profile">
        <Btn label={t('signOutBtn')} onClick={showModal} />
      </footer>
    </>
  );
};

export default Profile;
