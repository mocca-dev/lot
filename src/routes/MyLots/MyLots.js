import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import LotList from '../../components/LotList/LotList';
import { fetchMyLots, selecMyLots } from '../../reducers/myLots/myLotsSlice';
import { hideFixedContent } from '../../reducers/showFlags/showFlagsSlice';
import { set } from '../../reducers/subHeader/subHeaderSlice';

const MyLots = () => {
  const dispatch = useDispatch();
  const list = useSelector(selecMyLots);

  useEffect(() => {
    dispatch(fetchMyLots());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(set('Mis publicaciones'));
    dispatch(hideFixedContent());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <LotList list={list} />
    </main>
  );
};

export default MyLots;
