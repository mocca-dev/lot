import { useContext, useEffect, useState } from 'react';
import Store from '../../store';

import LotList from '../../components/LotList/LotList';
import SearchBar from '../../components/SearchBar/SearchBar';

const Bookmarks = () => {
  const { dispatch } = useContext(Store);

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
    dispatch({ type: 'SET_SUB_HEADER', payload: 'Guardados' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <span className="non-scroll-main">
        <SearchBar />
        <span className="result-counter">
          Mostrando {results?.length} de 10
        </span>
      </span>
      <main>
        <LotList list={results} />
      </main>
    </>
  );
};

export default Bookmarks;
