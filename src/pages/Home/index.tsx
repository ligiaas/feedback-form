import React, { useEffect, useState } from 'react';
import Form from 'components/Form';
import FormInput from 'components/FormInput';
import Table from 'components/Table';
import * as Types from 'types/input';
import { initialValues } from 'constants/formValues';
import './styles.css';

const Home = () => {
  const [, setForm] = useState<Types.FormValues>(initialValues);

  const handleSubmit = () => {
    setForm(initialValues);
  }

  return (
    <div className="Home">
      <h3>Formulário</h3>
      <Form submit={handleSubmit} initialValues={initialValues as Types.FormValues}>
        <FormInput
          id="name"
          label="Nome completo"
          name="name"
          placeholder="João da Silva"
          type="text"
          required
        />
        <FormInput
          id="email"
          label="E-mail"
          name="email"
          placeholder="exemplo@exemplo.com"
          type='email'
        />
        <FormInput
          id="message"
          label="Mensagem"
          name="message"
          placeholder="Escreva aqui sua mensagem"
          type='text'
        />
      </Form>
      <Table />
    </div>
  )
}

export default Home