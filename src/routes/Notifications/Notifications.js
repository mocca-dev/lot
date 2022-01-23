import { useContext, useEffect, useState } from 'react';
import NotificationList from '../../components/NotificationList/NotificationList';
import Store from '../../store';

const fetchNotificationsData = (setResults, setIsFetching) => {
  setIsFetching(true);
  fetch('api/parkinglots')
    .then((response) => response.json())
    .then((data) => {
      setResults(data);
      setIsFetching(false);
    });
};

const Notifications = () => {
  const { dispatch } = useContext(Store);
  const [results, setResults] = useState();
  const [isFetching, setIsFetching] = useState([]);

  useEffect(() => {
    dispatch({ type: 'SET_SUB_HEADER', payload: 'Notificaciones' });
    dispatch({ type: 'HIDE_FIXED_CONTENT' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchNotificationsData(setResults, setIsFetching);
  }, []);

  return (
    <main>
      <NotificationList list={results} isLoading={isFetching} />
    </main>
  );
};

export default Notifications;
