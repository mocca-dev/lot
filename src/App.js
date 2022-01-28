import './App.css';
import { useState, useReducer } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Store from './store';
import appReducer from './reducers';
import { makeServer } from './server';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './routes/Main/Main';
import New from './routes/New/New';
import Map from './routes/Map/Map';
import Notifications from './routes/Notifications/Notifications';
import Bookmarks from './routes/Bookmarks/Bookmarks';
import Profile from './routes/Profile/Profile';
import MyLots from './routes/MyLots/MyLots';
import SubHeader from './components/SubHeader/SubHeader';
import ModalWrapper from './components/Modal/ModalWrapper/ModalWrapper';
import { useSelector } from 'react-redux';
import {
  selecFixedContent,
  selecFooter,
} from './reducers/showFlags/showFlagsSlice';
import Lot from './routes/Lot/Lot';

makeServer();

function App() {
  const fixedContent = useSelector(selecFixedContent);
  const showFooter = useSelector(selecFooter);
  const [footerItems] = useState([
    // { icon: 'map', route: '/map' },
    { icon: 'bookmark', route: '/bookmark' },
    { icon: 'search', route: '/' },
    { icon: 'new', route: '/new' },
    { icon: 'notification', route: '/notification' },
  ]);

  const [state, dispatch] = useReducer(appReducer, {
    subHeader: 'Buscar cocheras',
    showLogo: true,
    showFooter: true,
    showFixedContent: true,
    initialMarker: 'search',
    modal: {
      show: false,
      title: '',
      content: '',
      btns: {
        left: { action: null, text: 'cancelar' },
        right: { action: null, text: 'aceptar' },
      },
    },
  });

  return (
    <Store.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <div
          className={'App' + (!fixedContent ? ' without-non-scroll-main' : '')}
        >
          <Header />
          <SubHeader />
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/bookmark" element={<Bookmarks />}></Route>
            <Route path="/notification" element={<Notifications />}></Route>
            <Route path="/new" element={<New />}></Route>
            <Route path="/map" element={<Map />}></Route>
            <Route path="/mylots" element={<MyLots />}></Route>
            <Route path="/lot" element={<Lot />}></Route>
          </Routes>
          {showFooter && <Footer items={footerItems} />}
        </div>
      </BrowserRouter>
      <ModalWrapper />
    </Store.Provider>
  );
}

export default App;
