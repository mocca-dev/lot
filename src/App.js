import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './routes/Main/Main';
import New from './routes/New/New';
import Map from './routes/Map/Map';
import Notifications from './routes/Notifications/Notifications';
import Bookmarks from './routes/Bookmarks/Bookmarks';
import Profile from './routes/Profile/Profile';

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
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/bookmarks" element={<Bookmarks />}></Route>
          <Route path="/notifications" element={<Notifications />}></Route>
          <Route path="/new" element={<New />}></Route>
          <Route path="/map" element={<Map />}></Route>
        </Routes>
        <Footer items={footerItems} />
      </div>
    </BrowserRouter>
  );
}

export default App;
