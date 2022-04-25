import React from 'react';

export interface ButtonDefaultCommons {
  appearance?: 'Default' | 'Primary' | 'Link';
  prefix?: string;
  size?: 'Sm' | 'Md' | 'Lg';
  theme?: 'Default' | 'Dark';
}

export type ButtonDefaultProps = Partial<ButtonDefaultCommons> &
  React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;
