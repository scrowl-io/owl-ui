import React from 'react';
import * as bs from 'react-bootstrap';

export interface SpinnerDefaultCommons {
  theme?: 'Default' | 'Dark';
  size?: 'Sm' | 'Md' | 'Lg';
  prefix?: string;
  animation: 'border' | 'grow';
  variant?: string;
}

export interface themePrefixesProps {
  [key: string]: string;
}

export type SpinnerDefaultProps = SpinnerDefaultCommons & bs.SpinnerProps;
