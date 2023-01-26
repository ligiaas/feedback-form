import { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  type: HTMLInputElement['type'];
}

export interface FormValues {
  [name: string]: string;
}

export interface FormContextValue {
  form: FormValues;
  handleFormChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setForm: (form: FormValues) => void;
}

export interface FormProps {
  children: React.ReactNode;
  submit: (form: FormValues) => void;
  initialValues: FormValues;
}
