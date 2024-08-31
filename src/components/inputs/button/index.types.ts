import { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonProps = {
  variant: 'text' | 'contained' | 'outlined';
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;
