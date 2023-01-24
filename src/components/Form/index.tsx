import React from 'react';
import './styles.css';
import TextField from '../TextField';
import { validate } from '../../utils/formValidation';

const Form: React.FC = () => {
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log('event', e);
    const target = e.target as typeof e.target & {
      email: { id: string; value: string };
      name: { id: string; value: string };
    };
    const email = target.email.value; // typechecks!
    const idEmail = target.email.id;
    const name = target.name.value;
    const idName = target.name.id;

    const emailValid = validate({ email, idEmail });

    if (emailValid !== null) {
      console.log('email ', email);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="name"
        label="Nome completo"
        name="name"
        placeholder="John Smith"
        required
      />
      <TextField
        id="email"
        label="E-mail"
        name="email"
        placeholder="example@example.com"
      />
      <input type="submit" value="Enviar" />
    </form>
  );
};

export default Form;
