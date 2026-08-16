import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { set } from '../../reducers/subHeader/subHeaderSlice';

const Map = () => {
  const { dispatch } = useDispatch();

  useEffect(() => {
    dispatch(set('Mapa'));
    // dispatch({ type: 'SET_SUB_HEADER', payload: 'Mapa' });
    // dispatch({ type: 'HIDE_FIXED_CONTENT' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <main></main>;
};

export default Map;
