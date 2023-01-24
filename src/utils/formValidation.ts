import { emailValidation } from '../constants/formValues';

interface ValidateProps {
  email: string;
  idEmail: string;
}

const validateEmail = (email: string) => email.match(emailValidation);

export function validate({ email, idEmail }: ValidateProps) {
  const input = document.getElementById(idEmail) as HTMLInputElement;
  const validityState = input.validity;
  const validation = validateEmail(email);

  if (validation !== null && validityState.valueMissing) {
    input.setCustomValidity('You gotta fill this out, yo!');
  } else if (validityState.rangeUnderflow) {
    input.setCustomValidity('We need a higher number!');
  } else if (validityState.rangeOverflow) {
    input.setCustomValidity('Thats too high!');
  } else {
    input.setCustomValidity('');
  }

  input.reportValidity();
}
