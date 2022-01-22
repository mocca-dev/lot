import RadioBtn from '../RadioBtn/RadioBtn';
import './RadioGroup.css';

const RadioGroup = ({ list, setSelected, selected, name }) => {
  return (
    <>
      <div className="radio-group-container">
        {list?.map((radio) => (
          <RadioBtn
            key={radio.value}
            label={radio.label}
            name={name}
            value={radio.value}
            onChange={(e) => setSelected(e.target.value)}
            selected={selected}
          />
        ))}
      </div>
      <div className="spacer"></div>
    </>
  );
};

export default RadioGroup;
