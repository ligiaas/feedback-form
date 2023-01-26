import './styles.css';
import * as Types from 'types/input';

export const Input: React.FC<Types.InputProps> = ({
  id,
  placeholder,
  type,
}) => <input id={id} placeholder={placeholder} type={type} />;
