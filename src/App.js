import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [footerItems] = useState([
    { icon: 'map', route: '/map', initial: false },
    { icon: 'bookmark', route: '/bookmark', initial: false },
    { icon: 'search', route: '/search', initial: true },
    { icon: 'new', route: '/new', initial: false },
    { icon: 'notification', route: '/notification', initial: false },
  ]);

  const [xOffset, setXOffset] = useState('');

  useEffect(() => {
    setXOffset(document.querySelector('.initial-item').offsetLeft);
  }, []);

  const positionMarker = (e) => {
    const { currentTarget } = e;

    if (currentTarget.tagName === 'DIV') {
      document.querySelectorAll('.item-container').forEach((item) => {
        item.classList.remove('active');
      });
      setXOffset(currentTarget.offsetLeft + 'px');

      currentTarget.classList.toggle('active');
    }
  };

  return (
    <div className="App">
      <footer className="footer-container">
        <nav className="nav-container">
          <div id="marker" style={{ left: xOffset }}></div>
          {footerItems.map((item) => (
            <div
              className={
                'item-container ' + (item.initial ? 'initial-item active' : '')
              }
              onClick={(e) => positionMarker(e)}
            >
              <img src={`/icons/${item.icon}.svg`} alt="" />
            </div>
          ))}
        </nav>
      </footer>
    </div>
  );
}

export default App;
