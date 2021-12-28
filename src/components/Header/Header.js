import React, { useState } from 'react';

import './Header.css';

const Header = () => {
  const [showLogo] = useState(true);

  return (
    <header>
      <img
        className={'left-img ' + (showLogo ? 'big-size' : 'normal-size')}
        src={showLogo ? '/icons/logo512.png' : '/icons/left-arrow.svg'}
        alt="back"
        srcset=""
      />
      <img
        className="profile-pic"
        src="/icons/profile-mock.png"
        alt="profile"
        srcset=""
      />
    </header>
  );
};

export default Header;
