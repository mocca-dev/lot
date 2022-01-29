import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fecthLot, selecLot } from '../../reducers/lot/lotSlice';
import { hideFixedContent } from '../../reducers/showFlags/showFlagsSlice';
import { set } from '../../reducers/subHeader/subHeaderSlice';
import DetailRow from './DetailRow/DetailRow';

import './Lot.css';

const Lot = () => {
  const dispatch = useDispatch();
  const lot = useSelector(selecLot);
  const [isBookmaked, setIsBookmarked] = useState(false);

  useEffect(() => {
    dispatch(fecthLot());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(set(lot.title));
    dispatch(hideFixedContent());
  }, [lot, dispatch]);

  return (
    <main className="lot-container">
      <img className="lot-img" src={lot.img} alt="Foto" />
      <div className="lot-body">
        <div className="left-side">
          <DetailRow
            className="bigger-icon-size"
            content={lot.address}
            iconUrl="/icons/map.svg"
          />
          <DetailRow content={lot.contact} iconUrl="/icons/telephone.svg" />
          <DetailRow content={lot.availability} iconUrl="/icons/calendar.svg" />
          <DetailRow content={lot.typeOfVehicle} iconUrl="/icons/car.svg" />
          <DetailRow content={lot.typeOfCover} iconUrl="/icons/roof.svg" />
          <DetailRow content={lot.contactName} iconUrl="/icons/user.svg" />
        </div>
        <div className="right-side">
          <button
            className="bookmark-btn"
            onClick={() => setIsBookmarked((prevValue) => !prevValue)}
          >
            <img
              src={
                isBookmaked ? '/icons/bookmarked.svg' : '/icons/bookmark.svg'
              }
              width="18px"
              alt="bookmark"
            />
          </button>
        </div>
      </div>
      <p>{lot.description}</p>
    </main>
  );
};

export default Lot;
