import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './routes/Main/Main';

function App() {
  const [footerItems] = useState([
    { icon: 'map', route: '/map' },
    { icon: 'bookmark', route: '/bookmarks' },
    { icon: 'search', route: '/', initial: true },
    { icon: 'new', route: '/new' },
    { icon: 'notification', route: '/notifications' },
  ]);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/profile" element={<Main />}></Route>
          <Route path="/bookmarks" element={<Main />}></Route>
          <Route path="/notifications" element={<Main />}></Route>
          <Route path="/new" element={<Main />}></Route>
          <Route path="/map" element={<Main />}></Route>
        </Routes>
        <Footer items={footerItems} />
      </div>
    </BrowserRouter>
  );
}

export default App;
