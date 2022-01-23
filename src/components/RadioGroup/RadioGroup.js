import RadioBtn from '../RadioBtn/RadioBtn';
import './RadioGroup.css';

const RadioGroup = ({ list, name, label }) => {
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
          />
        ))}
      </div>
      <div className="spacer"></div>
    </>
  );
};

export default RadioGroup;
