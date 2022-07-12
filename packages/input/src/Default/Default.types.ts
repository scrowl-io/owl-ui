import React from 'react';
import * as bs from 'react-bootstrap';

export interface InputDefaultCommons {
  theme?: 'Default' | 'Dark';
  size?: 'Sm' | 'Md' | 'Lg';
  prefix?: string;
};

export type InputDefaultProps = Partial<InputDefaultCommons> & React.AllHTMLAttributes<HTMLDivElement>;
