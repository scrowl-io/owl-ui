import React from 'react';

export type ButtonDefaultCommons = {
  appearance?: 'Default' | 'Primary' | 'Link';
  children: React.ReactNode;
  onClick: () => void;
  prefix?: string;
  size?: 'Sm' | 'Md' | 'Lg';
  theme?: 'Default' | 'Dark';
};

export type ButtonDefaultProps = Partial<ButtonDefaultCommons> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;
