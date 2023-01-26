import React, { useEffect, useMemo, useState } from 'react';
import './styles.css';
import * as Types from 'types/input';
import FormContext from 'contexts/FormContext';

const Form: React.FC<Types.FormProps> = (props) => {
  const { children, submit = () => {}, initialValues } = props;

  const [form, setForm] = useState<Types.FormValues>(initialValues);

  useEffect(() => {
    setForm(initialValues);
  }, [initialValues]);

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = () => {
    submit(form);
    setForm(initialValues);
  }

  const contextValue = useMemo(() => (
    { form, handleFormChange }
  ), [form, handleFormChange]);


  return (
    <form className="Form">
      <FormContext.Provider value={contextValue}>
        {children}
      </FormContext.Provider>

      <button type="button" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}

export default Form;
