import './App.css';
import { useState } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import LotList from './components/LotList/LotList';

function App() {
  const [footerItems] = useState([
    { icon: 'map', route: '/map' },
    { icon: 'bookmark', route: '/bookmark' },
    { icon: 'search', route: '/search', initial: true },
    { icon: 'new', route: '/new' },
    { icon: 'notification', route: '/notification' },
  ]);

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
    <div className="App">
      <Header />
      <span className="sub-header">
        <h2 className="title">Buscar cocheras</h2>
        <SearchBar />
        <span className="result-counter">
          Mostrando {results?.length} de 10
        </span>
      </span>
      <main>
        <LotList list={results} />
      </main>
      <Footer items={footerItems} />
    </div>
  );
}

export default App;
