import './Btn.css';

const Btn = ({ label, onClick, type = 'button' }) => {
  return (
    <button type={type} className="btn-container" onClick={onClick}>
      {label}
    </button>
  );
};

export default Btn;
