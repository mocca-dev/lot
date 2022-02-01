import { useSelector } from 'react-redux';
import {
  selecToastContent,
  selecToastShow,
} from '../../reducers/toaster/toasterSlice';

import './Toaster.css';

const Toaster = () => {
  const show = useSelector(selecToastShow);
  const content = useSelector(selecToastContent);

  return (
    <div className={'toaster-container' + (show ? ' show-toaster' : '')}>
      <div className="toaster-tile">
        <span>{content}</span>
      </div>
    </div>
  );
};

export default Toaster;
