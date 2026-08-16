import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import LotList from '../../components/LotList/LotList';
import {
  fetchMyLots,
  selecMyLots,
  selecMyLotsIsFetching,
} from '../../reducers/myLots/myLotsSlice';
import { hideFixedContent } from '../../reducers/showFlags/showFlagsSlice';
import { set } from '../../reducers/subHeader/subHeaderSlice';

const MyLots = () => {
  const dispatch = useDispatch();
  const list = useSelector(selecMyLots);
  const isFetching = useSelector(selecMyLotsIsFetching);
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(fetchMyLots());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(set(t('myPostsSubheader')));
    dispatch(hideFixedContent());
  }, [dispatch, t]);

  return (
    <main>
      <LotList list={list} isLoading={isFetching} />
    </main>
  );
};

export default MyLots;
