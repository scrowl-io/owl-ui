import React from 'react';

export interface HelloDefaultCommons {
  appearance?: 'Primary' | 'Outline';
  theme?: 'Default' | 'Dark';
  size?: 'Sm' | 'Md' | 'Lg';
  prefix?: string;
  children: React.ReactNode;
};

export type HelloDefaultProps = Partial<HelloDefaultCommons> & React.AllHTMLAttributes<HTMLDivElement>;
