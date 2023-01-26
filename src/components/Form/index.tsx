import React, { useContext } from 'react';
import './styles.css';
import * as Types from 'types/input';
import { FormContext } from 'contexts/FormContext';
import { validate } from 'utils/formValidation';

const Form: React.FC<Types.FormProps> = (props) => {
  const { children, submit = () => { }, initialValues } = props;
  
  const { form, setForm } = useContext(FormContext)
  const handleSubmit = () => {
    submit(form);
    if (validate({ email: form.email, idEmail: 'email' }) !== null) {
      console.log('form', form)
    }
    setForm(initialValues);
  }

  return (
    <form className="Form">
      {children}
      <div className="Button">
        <button type="button" onClick={handleSubmit}>
          Enviar
        </button>
      </div>
    </form>
  );
}

export default Form;
