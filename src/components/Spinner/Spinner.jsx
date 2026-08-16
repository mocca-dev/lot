import { useSelector } from 'react-redux';
import { SpinnerCircularFixed } from 'spinners-react';
import { selecSpinner } from '../../reducers/spinner/spinnerSlice';

import './Spinner.css';

const Spinner = () => {
  const spinner = useSelector(selecSpinner);

  return (
    <>
      {spinner && (
        <div className="spinner-container">
          <div className="spinner-tile">
            <SpinnerCircularFixed
              size={50}
              thickness={100}
              speed={100}
              color="rgba(25, 31, 66, 1)"
              secondaryColor="rgba(238, 238, 238, 1)"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Spinner;
