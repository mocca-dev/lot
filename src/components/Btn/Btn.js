import './Btn.css';

const Btn = ({ label, onClick }) => {
  return (
    <button className="btn-container" onClick={onClick}>
      {label}
    </button>
  );
};

export default Btn;
