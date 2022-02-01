import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { set } from '../../reducers/subHeader/subHeaderSlice';
import NotificationList from '../../components/NotificationList/NotificationList';
import { hideFixedContent } from '../../reducers/showFlags/showFlagsSlice';
import {
  fetchNotifications,
  selecNotifications,
  selecNotificationsIsFetching,
} from '../../reducers/notifications/notificationsSlice';

const Notifications = () => {
  const dispatch = useDispatch();
  const notifications = useSelector(selecNotifications);
  const isFetching = useSelector(selecNotificationsIsFetching);

  useEffect(() => {
    dispatch(fetchNotifications());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(set('Notificaciones'));
    dispatch(hideFixedContent());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <NotificationList list={notifications} isLoading={isFetching} />
    </main>
  );
};

export default Notifications;
