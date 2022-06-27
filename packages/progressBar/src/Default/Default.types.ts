import React from 'react';
import * as bs from 'react-bootstrap';

export interface ProgressBarDefaultCommons {
  theme?: 'Default' | 'Dark';
  size?: 'Sm' | 'Md' | 'Lg';
  prefix?: string;
  now: number;
}

export interface themePrefixesProps {
  [key: string]: string;
}

export type ProgressBarDefaultProps = Partial<ProgressBarDefaultCommons> &
  bs.ProgressBarProps;
