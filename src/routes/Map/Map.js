import { useContext, useEffect } from 'react';
import Store from '../../store';

const Map = () => {
  const { dispatch } = useContext(Store);

  useEffect(() => {
    dispatch({ type: 'SET_SUB_HEADER', payload: 'Mapa' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <main>Map</main>;
};

export default Map;
