import { useContext, useEffect } from 'react';
import Store from '../../store';

const Profile = () => {
  const { dispatch } = useContext(Store);

  useEffect(() => {
    dispatch({ type: 'SET_SUB_HEADER', payload: 'Perfil' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <main>Profile</main>;
};

export default Profile;
