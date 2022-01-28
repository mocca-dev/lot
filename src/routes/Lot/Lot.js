import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fecthLot, selecLot } from '../../reducers/lot/lotSlice';
import { set } from '../../reducers/subHeader/subHeaderSlice';

const Lot = () => {
  const dispatch = useDispatch();
  const lot = useSelector(selecLot);

  useEffect(() => {
    dispatch(fecthLot());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(set(lot.title));
  }, [lot, dispatch]);

  return <main>{lot?.title}</main>;
};

export default Lot;
