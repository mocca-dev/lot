import { useState } from 'react';

import LotList from '../../components/LotList/LotList';
import SearchBar from '../../components/SearchBar/SearchBar';

const Main = () => {
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
  return (
    <>
      <span className="sub-header">
        <h2 className="title">Buscar cocheras</h2>
        <SearchBar />
        <span className="result-counter">
          Mostrando {results?.length} de 10
        </span>
      </span>
      <main>
        <LotList list={results} />
      </main>{' '}
    </>
  );
};

export default Main;
