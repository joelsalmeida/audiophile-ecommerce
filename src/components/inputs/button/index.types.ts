import { ButtonHTMLAttributes, ReactNode } from 'react';
import { LinkProps } from 'next/link';

export type ButtonBaseProps = {
  variant: 'text' | 'contained' | 'outlined';
  fullWidth?: boolean;
  children: ReactNode;
};

export type ButtonAsButtonProps = ButtonBaseProps & {
  asLink?: false;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonAsLinkProps = ButtonBaseProps & {
  asLink: true;
  href: LinkProps['href'];
} & Omit<LinkProps, 'href'>;

export type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;
