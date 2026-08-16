import { Field } from 'formik';
import './RadioBtn.css';

const RadioBtn = ({ label, name, id, value, error, touched }) => {
  return (
    <label
      className={
        'radio-btn-container ' + (touched && error ? 'error-border ' : '')
      }
      htmlFor={id}
    >
      <Field type="radio" id={id} name={name} value={value} />
      <span className="checkmark">{label}</span>
    </label>
  );
};

export default RadioBtn;
