import { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  placeholder?: string;
  type: HTMLInputElement['type'];
}

export interface TextFieldProps extends Omit<InputProps, 'type'> {
  label: string;
}
