import { useContext, useEffect } from 'react';
import Store from '../../store';

const Bookmarks = () => {
  const { dispatch } = useContext(Store);

  useEffect(() => {
    dispatch({ type: 'SET_SUB_HEADER', payload: 'Guardados' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <main>Bookmarks</main>;
};

export default Bookmarks;
