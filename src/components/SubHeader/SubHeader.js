import { useSelector } from 'react-redux';
import { selecSubHeader } from '../../reducers/subHeader/subHeaderSlice';

const SubHeader = () => {
  const subHedarText = useSelector(selecSubHeader);

  return (
    <span className="sub-header">
      <h2 className="title">{subHedarText}</h2>
    </span>
  );
};

export default SubHeader;
