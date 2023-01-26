import { useContext } from 'react';
import { InputProps } from 'types/input';
import FormContext from 'contexts/FormContext';
import './styles.css';

const FormInput: React.FC<InputProps> = (props) => {
  const {
    id,
    placeholder,
    required,
    label, 
    type, 
    name,
  } = props;

  const formContext = useContext(FormContext);
  const { form, handleFormChange } = formContext;

  return (
    <div className="FormInput">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        placeholder={placeholder}
        required={required}
        type={type}
        name={name}
        value={form[name]}
        onChange={handleFormChange}
      />
    </div>
  )
}

export default FormInput;
