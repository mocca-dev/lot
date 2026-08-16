import RadioBtn from '../RadioBtn/RadioBtn';
import './RadioGroup.css';

const RadioGroup = ({ list, name, label, error, touched }) => {
  return (
    <>
      <div>{label}</div>
      <div role="group" className="radio-group-container">
        {list?.map((radio) => (
          <RadioBtn
            key={radio.value}
            label={radio.label}
            name={name}
            value={radio.value}
            error={error}
            touched={touched}
          />
        ))}
      </div>
      <div className="error-msg">{touched ? error : ''}</div>
    </>
  );
};

export default RadioGroup;
