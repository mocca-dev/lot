import { useContext, useEffect } from 'react';
import Store from '../../store';

const Notifications = () => {
  const { dispatch } = useContext(Store);

  useEffect(() => {
    dispatch({ type: 'SET_SUB_HEADER', payload: 'Notificaciones' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <main>Notifications</main>;
};

export default Notifications;
