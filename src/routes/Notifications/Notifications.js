import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { set } from '../../reducers/subHeader/subHeaderSlice';
import NotificationList from '../../components/NotificationList/NotificationList';

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
  const dispatch = useDispatch();
  const [results, setResults] = useState();
  const [isFetching, setIsFetching] = useState([]);

  useEffect(() => {
    dispatch(set('Notificaciones'));
    // dispatch({ type: 'HIDE_FIXED_CONTENT' });
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
