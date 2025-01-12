import { InputHTMLAttributes } from 'react';

export type TextFieldProps = {
  error?: boolean;
  inputMask?: (value: string) => string;
} & InputHTMLAttributes<HTMLInputElement>;
