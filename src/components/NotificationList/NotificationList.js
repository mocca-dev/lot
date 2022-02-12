import { SpinnerCircularFixed } from 'spinners-react';

import './NotificationList.css';

const NotificationList = ({ list, isLoading }) => {
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
    <div className="notifications-container">
      {list?.map((result, id) => (
        <div className="result-container" key={id}>
          <img
            className="result-img"
            src="/icons/item-mock.png"
            height="65px"
            alt=""
          />
          <span className="result-detail">
            <strong>{result.requestedBy}</strong>
            <span>{result.title}</span>
            <span className="since">{result.since}d</span>
          </span>
          <button className="btn-delete">
            <img src="/icons/cross.png" alt="" />
          </button>
          <button className="btn-accept">
            <img src="/icons/tick.png" alt="" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default NotificationList;
