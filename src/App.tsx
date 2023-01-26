import Form from 'components/Form';
import FormInput from 'components/FormInput';
import { useState } from 'react';
import { FormValues } from 'types/input';
import { validate } from 'utils/formValidation';

const initialValues = {
  name: '',
  email: '',
  message: '',
};

function App() {
  const [values, setValues] = useState(initialValues);
  const submit = (form: FormValues) => {
    if (validate({ email: form.email, idEmail: 'email' }) !== null) {
      setValues({ name: form.name, message: form.message, email: form.email });
      console.log('values', values)
    }
  };

  return (
    <Form submit={submit} initialValues={initialValues as FormValues}>
      <FormInput
        id="name"
        label="Nome completo"
        name="name"
        placeholder="John Smith"
        type="text"
        required
      />
      <FormInput
        id="email"
        label="E-mail"
        name="email"
        placeholder="example@example.com"
        type='email'
      />
      <FormInput
        id="message"
        label="Message"
        name="message"
        placeholder="Type your message"
        type='text'
      />
    </Form>
  );
}

export default App;
