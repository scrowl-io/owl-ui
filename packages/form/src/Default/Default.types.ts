import React from 'react';
import * as bs from 'react-bootstrap';

export interface FormDefaultCommons {
  theme?: 'Default' | 'Dark';
  size?: 'Sm' | 'Md' | 'Lg';
  prefix?: string;
};

export type FormDefaultProps = Partial<FormDefaultCommons> & React.AllHTMLAttributes<HTMLDivElement>;
