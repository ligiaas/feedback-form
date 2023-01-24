import { useContext } from 'react';
import './styles.css';
import { Input } from '../Input';
import { TextContext } from '../../App';
import * as Types from '../../types/input';

const TextField: React.FC<Types.TextFieldProps> = ({
  id,
  label,
  required,
  ...rest
}) => {
  const { state, update } = useContext(TextContext);
  return (
    <fieldset className="FormInput">
      <label htmlFor={id}>{`${label} ${required ? '*' : ''}`}</label>
      <Input
        id={id}
        onChange={(e) => update(e.target.value)}
        type="text"
        value={state}
        required={required}
        {...rest}
      />
      <span className="validity" />
    </fieldset>
  );
};

export default TextField;
