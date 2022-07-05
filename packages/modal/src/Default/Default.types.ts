import React from 'react';
import * as bs from 'react-bootstrap';

export interface ModalDefaultCommons {
  theme?: 'Default' | 'Dark';
  size?: 'Sm' | 'Md' | 'Lg';
  prefix?: string;
};

export type ModalDefaultProps = Partial<ModalDefaultCommons> & React.AllHTMLAttributes<HTMLDivElement>;
