import React from 'react';

export type ButtonDefaultCommons = {
  appearance?: 'Default' | 'Primary';
  ariadescribedby?: string;
  arialabel?: string;
  children: React.ReactNode;
  disabled?: boolean;
  prefix?: string;
  size?: 'Sm' | 'Md' | 'Lg';
  theme?: 'Default' | 'Dark';
};

export type ButtonDefaultProps = Partial<ButtonDefaultCommons> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;
