import './RadioBtn.css';

const RadioBtn = ({ label, name, id, value, onChange, selected }) => {
  return (
    <label
      className={
        'radio-btn-container' +
        (selected === value.toString() ? ' checked' : '')
      }
      htmlFor={id}
    >
      <input
        type="radio"
        onChange={onChange}
        id={id}
        name={name}
        value={value}
      />
      {label}
    </label>
  );
};

export default RadioBtn;
