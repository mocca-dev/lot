import './App.css';
import { useState, useReducer } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Store from './store';
import appReducer from './reducer';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './routes/Main/Main';
import New from './routes/New/New';
import Map from './routes/Map/Map';
import Notifications from './routes/Notifications/Notifications';
import Bookmarks from './routes/Bookmarks/Bookmarks';
import Profile from './routes/Profile/Profile';
import MyLots from './routes/MyLots/MyLots';

function App() {
  const [footerItems] = useState([
    { icon: 'map', route: '/map' },
    { icon: 'bookmark', route: '/bookmarks' },
    { icon: 'search', route: '/' },
    { icon: 'new', route: '/new' },
    { icon: 'notification', route: '/notifications' },
  ]);

  const [state, dispatch] = useReducer(appReducer, {
    subHeader: 'Buscar cocheras',
    showLogo: true,
    showFooter: true,
    initialMarker: 'search',
  });

  return (
    <Store.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <span className="sub-header">
            <h2 className="title">{state.subHeader}</h2>
          </span>
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/bookmarks" element={<Bookmarks />}></Route>
            <Route path="/notifications" element={<Notifications />}></Route>
            <Route path="/new" element={<New />}></Route>
            <Route path="/map" element={<Map />}></Route>
            <Route path="/mylots" element={<MyLots />}></Route>
          </Routes>
          {state.showFooter && <Footer items={footerItems} />}
        </div>
      </BrowserRouter>
    </Store.Provider>
  );
}

export default App;
