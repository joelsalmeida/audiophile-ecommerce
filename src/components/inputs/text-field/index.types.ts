import { InputHTMLAttributes } from 'react';

export type TextFieldProps = {
  error?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;
