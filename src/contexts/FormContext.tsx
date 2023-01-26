import React from 'react';
import * as Types from 'types/input';

const FormContext = React.createContext<Types.FormContextValue>({
  form: {} as Types.FormValues,
  handleFormChange: () => {}
});

export default FormContext;