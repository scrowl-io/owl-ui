import React from 'react';

export type NavigationDrawerDefaultCommons = {
  appearance?: 'Primary' | 'Outline';
  theme?: 'Default' | 'Dark';
  size?: 'Sm' | 'Md' | 'Lg';
  prefix?: string;
  children: React.ReactNode;
};

export type NavigationDrawerDefaultProps = Partial<NavigationDrawerDefaultCommons> & React.AllHTMLAttributes<HTMLDivElement>;
