import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { makeServer } from './server';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './routes/Main/Main';
import New from './routes/New/New';
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
  selecShowHeader,
} from './reducers/showFlags/showFlagsSlice';
import Lot from './routes/Lot/Lot';
import Spinner from './components/Spinner/Spinner';
import Toaster from './components/Toster/Toaster';
import SignIn from './routes/SignIn/SignIn';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

makeServer();

function App() {
  const fixedContent = useSelector(selecFixedContent);
  const showHeader = useSelector(selecShowHeader);
  const showFooter = useSelector(selecFooter);
  const [footerItems] = useState([
    // { icon: 'map', route: '/map' },
    { icon: 'bookmark', route: '/bookmark' },
    { icon: 'search', route: '/' },
    { icon: 'new', route: '/new' },
    { icon: 'notification', route: '/notification' },
  ]);

  return (
    <>
      <BrowserRouter>
        <div
          className={'App' + (!fixedContent ? ' without-non-scroll-main' : '')}
        >
          {showHeader && <Header />}
          <SubHeader />
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route exact path="/lot" element={<Lot />}>
              <Route path=":id" element={<Lot />} />
            </Route>
            <Route
              exact
              path="/profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
            <Route
              exact
              path="/bookmark"
              element={
                <PrivateRoute>
                  <Bookmarks />
                </PrivateRoute>
              }
            />
            <Route
              exact
              path="/notification"
              element={
                <PrivateRoute>
                  <Notifications />
                </PrivateRoute>
              }
            />
            <Route
              exact
              path="/new"
              element={
                <PrivateRoute>
                  <New />
                </PrivateRoute>
              }
            />
            <Route
              path="/mylots"
              element={
                <PrivateRoute>
                  <MyLots />
                </PrivateRoute>
              }
            />
            {/* <Route exact path="/map" element={<Map />} /> */}
            <Route exact path="/signin" element={<SignIn />} />
          </Routes>
          {showFooter && <Footer items={footerItems} />}
        </div>
        <ModalWrapper />
      </BrowserRouter>
      <Spinner />
      <Toaster />
    </>
  );
}

export default App;
