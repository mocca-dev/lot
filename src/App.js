import './App.css';
import { useState } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  const [footerItems] = useState([
    { icon: 'map', route: '/map' },
    { icon: 'bookmark', route: '/bookmark' },
    { icon: 'search', route: '/search', initial: true },
    { icon: 'new', route: '/new' },
    { icon: 'notification', route: '/notification' },
  ]);

  return (
    <div className="App">
      <Header />
      <h2 className="title">Buscar cocheras</h2>
      <Footer items={footerItems} />
    </div>
  );
}

export default App;
