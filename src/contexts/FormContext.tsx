import { initialValues } from 'constants/formValues';
import React, { useMemo, useState } from 'react';
import * as Types from 'types/input';

const FormContext = React.createContext<Types.FormContextValue>({
  form: {} as Types.FormValues,
  handleFormChange: () => { },
  setForm: () => { },
});

const FormProvider: React.FC<React.PropsWithChildren> = ({children}) => {
  const [form, setForm] = useState<Types.FormValues>(initialValues);
  
  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value
    });
  };
  
  const contextValue = useMemo(() => (
    { form, handleFormChange, setForm }
  ), [form, handleFormChange, setForm]);

  return (
    <FormContext.Provider value={contextValue}>
      {children}
    </FormContext.Provider>
  );

};

export {FormContext, FormProvider};