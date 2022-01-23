import { SpinnerCircularFixed } from 'spinners-react';

import './LotList.css';

const LotList = ({ list, isLoading }) => {
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

  if (list.length === 0) {
    return (
      <div className="no-items-container">No hay resultados para mostrar</div>
    );
  }

  return (
    <div className="results-container">
      {list?.map((result, id) => (
        <div className="result-container" key={id}>
          <img
            className="result-img"
            src="/icons/item-mock.png"
            height="65px"
            alt=""
          />
          <span className="result-detail">
            <strong>{result.title}</strong>
            <span>
              <img src="/icons/map.svg" height="13px" alt="" />
              {result.address}
            </span>
          </span>
          <span className="result-price">
            <span>
              ${result.price}
              <span className="frecuency">/día</span>
            </span>
            <span className="since">{result.since} días atrás</span>
          </span>
          <img className="right-arrow" src="/icons/left-arrow.svg" alt="goto" />
        </div>
      ))}
    </div>
  );
};

export default LotList;
