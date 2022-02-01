import { useSelector } from 'react-redux';
import { selecToaster } from '../../reducers/toaster/toasterSlice';

import './Toaster.css';

const Toaster = () => {
  const toaster = useSelector(selecToaster);
  return (
    <>
      {toaster && (
        <div className="toaster-container">
          <div className="toaster-tile">
            <span>Guardado</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Toaster;
