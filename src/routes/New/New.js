import { useContext, useEffect } from 'react';
import Store from '../../store';

const New = () => {
  const { dispatch } = useContext(Store);

  useEffect(() => {
    dispatch({ type: 'SET_SUB_HEADER', payload: 'Nueva publicación' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <main>New</main>;
};

export default New;
