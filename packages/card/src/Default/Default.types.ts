import React from 'react';

export type CardDefaultCommons = {
  appearance?: 'Default';
  children: React.ReactNode;
  prefix?: string;
  theme?: 'Default' | 'Dark';
};

export type CardDefaultProps = Partial<CardDefaultCommons> &
  React.HTMLAttributes<HTMLDivElement>;
