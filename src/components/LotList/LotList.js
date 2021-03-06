import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { SpinnerCircularFixed } from 'spinners-react';

import './LotList.css';

const LotList = ({ list, isLoading }) => {
  const { t } = useTranslation();
  const getAvailabilityLabel = (id) =>
    [
      t('availabilityHrShortLbl'),
      t('availabilityDayShortLbl'),
      t('availabilityWeekShortLbl'),
      t('availabilityFortShortLbl'),
      t('availabilityMonthShortLbl'),
    ][id];

  if (isLoading) {
    return (
      <div className="spinner-container">
        <SpinnerCircularFixed
          size={50}
          thickness={100}
          speed={100}
          color="rgba(25, 31, 66, 1)"
          secondaryColor="rgba(238, 238, 238, 1)"
        />
      </div>
    );
  }

  if (list.length === 0)
    return (
      <div className="no-items-container">No hay resultados para mostrar</div>
    );

  return (
    <div className="results-container">
      {list?.map((lot) => (
        <Link
          to={'/lot/?id=' + lot.id}
          className="result-container"
          key={lot.id}
        >
          <img
            className="result-img"
            src="/icons/item-mock.png"
            height="65px"
            alt=""
          />
          <span className="result-detail">
            <strong>{lot.title}</strong>
            <span>
              <img src="/icons/map.svg" height="13px" alt="" />
              {lot.address}
            </span>
          </span>
          <span className="result-price">
            <span>
              ${lot.price}
              <span className="frecuency">
                /{getAvailabilityLabel(lot.availability)}
              </span>
            </span>
            <span className="since">{lot.since}d</span>
          </span>
          {/* <img className="right-arrow" src="/icons/left-arrow.svg" alt="goto" /> */}
        </Link>
      ))}
    </div>
  );
};

export default LotList;
