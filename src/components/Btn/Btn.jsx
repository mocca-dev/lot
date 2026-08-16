import './Btn.css';

const Btn = ({ label, onClick, type = 'button', disabled }) => (
  <button
    type={type}
    className="btn-container"
    onClick={onClick}
    disabled={disabled}
  >
    {label}
  </button>
);

export default Btn;
