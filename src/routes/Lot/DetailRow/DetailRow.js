import './DetailRow.css';

const DetailRow = ({ content, iconUrl }) => {
  return (
    <div className="row-detail-container">
      <img src={iconUrl} alt="" />
      <span>{content}</span>
    </div>
  );
};

export default DetailRow;
