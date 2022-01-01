import './NotificationList.css';

const NotificationList = ({ list }) => {
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
            <span className="since">{result.since} días atrás</span>
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
