import React from 'react';

export type IconsDefaultCommons = {
  appearance?: 'Primary' | 'Alt';
  theme?: 'Default' | 'Dark' | 'Light';
  size?: 'Sm' | 'Md' | 'Lg' | 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6';
  prefix?: string;
  children: React.ReactNode;
};

export type IconsDefaultProps = Partial<IconsDefaultCommons> &
  React.AllHTMLAttributes<HTMLSpanElement>;
