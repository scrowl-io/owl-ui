import React from 'react';

export interface TextfieldDefaultCommons {
  appearance?: 'Primary' | 'Outline';
  theme?: 'Default' | 'Dark';
  size?: 'Sm' | 'Md' | 'Lg';
  prefix?: string;
}

export type TextfieldDefaultProps = Partial<TextfieldDefaultCommons> &
  React.InputHTMLAttributes<HTMLInputElement>;
