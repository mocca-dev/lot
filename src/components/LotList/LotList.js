import './LotList.css';

const LotList = ({ list }) => {
  return (
    <div className="results-container">
      {list.map((result, id) => (
        <div className="result-container" key={id}>
          <img
            className="result-img"
            src="/icons/item-mock.png"
            height="68px"
            alt=""
          />
          <span className="result-detail">
            <strong>{result.title}</strong>
            <span>{result.address}</span>
          </span>
          <span className="result-price">
            <span>
              {result.price} <span className="frecuency">/día</span>
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
