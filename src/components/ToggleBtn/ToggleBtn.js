import { useState } from 'react';

const ToggleBtn = () => {
  const [isLightMode, setIsLightMode] = useState(true);

  return (
    <button onClick={() => setIsLightMode(() => !isLightMode)}>
      {isLightMode ? 'Light' : 'Dark'}
    </button>
  );
};

export default ToggleBtn;
