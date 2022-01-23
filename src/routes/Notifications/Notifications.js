import { useContext, useEffect, useState } from 'react';
import NotificationList from '../../components/NotificationList/NotificationList';
import Store from '../../store';

const Notifications = () => {
  const { dispatch } = useContext(Store);

  useEffect(() => {
    dispatch({ type: 'SET_SUB_HEADER', payload: 'Notificaciones' });
    dispatch({ type: 'HIDE_FIXED_CONTENT' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [results] = useState([
    {
      img: '',
      title: 'Title Test',
      date: '',
      since: '12',
    },
    {
      img: '',
      title: 'Title Test2',
      date: '',
      since: '12',
    },
    {
      img: '',
      title: 'Title Test3',
      date: '',
      since: '12',
    },
    {
      img: '',
      title: 'Title Test3',
      date: '',
      since: '12',
    },
    {
      img: '',
      title: 'Title Test3',
      date: '',
      since: '12',
    },
    {
      img: '',
      title: 'Title Test3',
      date: '',
      since: '12',
    },
    {
      img: '',
      title: 'Title Test3',
      date: '',
      since: '12',
    },
  ]);

  return (
    <main>
      <NotificationList list={results} />
    </main>
  );
};

export default Notifications;
