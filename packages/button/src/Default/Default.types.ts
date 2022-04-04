import React from 'react';

export interface ButtonDefaultCommons {
  appearance?: 'Default' | 'Primary' | 'Link';
  ariadescribedby?: string;
  arialabel?: string;
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  href?: string;
  prefix?: string;
  size?: 'Sm' | 'Md' | 'Lg';
  theme?: 'Default' | 'Dark';
}

export type ButtonDefaultProps = Partial<ButtonDefaultCommons> &
  React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;
