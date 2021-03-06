import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router';

import { bookmarkLot, cleanLot, selecLot } from '../../reducers/lot/lotSlice';
import { fetchLotById } from '../../reducers/lot/lotSlice';
import { hideFixedContent } from '../../reducers/showFlags/showFlagsSlice';
import { hideSpinner, showSpinner } from '../../reducers/spinner/spinnerSlice';
import { set } from '../../reducers/subHeader/subHeaderSlice';
import DetailRow from './DetailRow/DetailRow';
import Btn from '../../components/Btn/Btn';

import './Lot.css';
import { createNewNotification } from '../../reducers/notifications/notificationsSlice';
// import { setHeaderContent } from '../../reducers/header/headerSlice';

const availability = ['Hora', 'Día', 'Semana', '15 Días', 'Mes'];
const typeOfVehicles = ['Moto', 'Auto', 'Camioneta', 'Trailer', 'Cuatri'];
const typeOfCover = ['Sin techo', 'Con techo', 'Cubierta'];

const Lot = () => {
  const dispatch = useDispatch();
  const lot = useSelector(selecLot);
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    const id = new URLSearchParams(location.search).get('id');
    dispatch(fetchLotById(id));
    return () => dispatch(cleanLot());
  }, [location, dispatch]);

  useEffect(() => {
    if (lot) {
      // dispatch(
      //   setHeaderContent('$' + lot.price + '/' + availability[lot.availability])
      // );
      dispatch(set(lot.title));
      dispatch(hideSpinner());
    } else {
      dispatch(showSpinner());
    }
    dispatch(hideFixedContent());
  }, [lot, dispatch]);

  return (
    <main className="lot-container">
      {lot && (
        <>
          <div className="img-container">
            <div className="price-availability">
              {'$' + lot.price + '/' + availability[lot.availability]}
            </div>
            <img className="lot-img" src={lot.img} alt="Foto" />
          </div>
          <div className="lot-body">
            <div className="left-side">
              <DetailRow
                className="bigger-icon-size"
                content={lot.address}
                iconUrl="/icons/map.svg"
              />
              <DetailRow content={lot.contact} iconUrl="/icons/telephone.svg" />
              <DetailRow
                content={availability[lot.availability]}
                iconUrl="/icons/calendar.svg"
              />
              <DetailRow
                content={typeOfVehicles[lot.typeOfVehicle]}
                iconUrl="/icons/car.svg"
              />
              <DetailRow
                content={typeOfCover[lot.typeOfCover]}
                iconUrl="/icons/roof.svg"
              />
              <DetailRow content={lot.contactName} iconUrl="/icons/user.svg" />
            </div>
            <div className="right-side">
              <button
                className="bookmark-btn"
                onClick={() => {
                  dispatch(
                    bookmarkLot({
                      id: lot.id,
                      saved: t('savedToast'),
                      unsaved: t('unsavedToast'),
                    })
                  );
                  dispatch(fetchLotById(lot.id));
                }}
              >
                <img
                  src={
                    lot.isBookmarked
                      ? '/icons/bookmarked.svg'
                      : '/icons/bookmark.svg'
                  }
                  width="18px"
                  alt="bookmark"
                />
              </button>
            </div>
          </div>
          <p>{lot.description}</p>
          <br />
          <Btn
            label={t('lotBtnLbl')}
            onClick={() => {
              dispatch(
                createNewNotification({
                  title: lot.title,
                  requestedBy: 'John Doe',
                  since: '3',
                })
              );
            }}
            disabled={false}
          />
          <br />
          <br />
        </>
      )}
    </main>
  );
};

export default Lot;
