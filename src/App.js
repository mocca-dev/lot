import './App.css';
import { useState } from 'react';
import Footer from './components/Footer/Footer';

function App() {
  const [footerItems] = useState([
    { icon: 'map', route: '/map', initial: false },
    { icon: 'bookmark', route: '/bookmark', initial: false },
    { icon: 'search', route: '/search', initial: true },
    { icon: 'new', route: '/new', initial: false },
    { icon: 'notification', route: '/notification', initial: false },
  ]);

  return (
    <div className="App">
      <Footer items={footerItems} />
    </div>
  );
}

export default App;
