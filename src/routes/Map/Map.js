import { useContext, useEffect } from 'react';

import Store from '../../store';

const Map = () => {
  const { dispatch } = useContext(Store);

  useEffect(() => {
    dispatch({ type: 'SET_SUB_HEADER', payload: 'Mapa' });
    dispatch({ type: 'HIDE_FIXED_CONTENT' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <main></main>;
};

export default Map;
