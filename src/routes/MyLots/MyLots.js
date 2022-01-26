import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import LotList from '../../components/LotList/LotList';
import { hideFixedContent } from '../../reducers/showFlags/showFlagsSlice';
import { set } from '../../reducers/subHeader/subHeaderSlice';

const MyLots = () => {
  const dispatch = useDispatch();
  const [results] = useState([
    {
      img: '',
      title: 'Title Test',
      address: 'Brown 247',
      date: '',
      price: '86',
      since: '12',
    },
    {
      img: '',
      title: 'Title Test2',
      address: 'Brown 247',
      date: '',
      price: '86',
      since: '12',
    },
    {
      img: '',
      title: 'Title Test3',
      address: 'Brown 247',
      date: '',
      price: '86',
      since: '12',
    },
    {
      img: '',
      title: 'Title Test3',
      address: 'Brown 247',
      date: '',
      price: '86',
      since: '12',
    },
    {
      img: '',
      title: 'Title Test3',
      address: 'Brown 247',
      date: '',
      price: '86',
      since: '12',
    },
    {
      img: '',
      title: 'Title Test3',
      address: 'Brown 247',
      date: '',
      price: '86',
      since: '12',
    },
    {
      img: '',
      title: 'Title Test3',
      address: 'Brown 247',
      date: '',
      price: '86',
      since: '12',
    },
  ]);

  useEffect(() => {
    dispatch(set('Mis publicaciones'));
    dispatch(hideFixedContent());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <LotList list={results} />
    </main>
  );
};

export default MyLots;
