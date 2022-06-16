import React from 'react';
import * as bs from 'react-bootstrap';

export interface ToastDefaultCommons {
  theme?: 'Default' | 'Dark';
  size?: 'Sm' | 'Md' | 'Lg';
  prefix?: string;
}

export interface themePrefixesProps {
  [key: string]: string;
}

export type ToastDefaultProps = Partial<ToastDefaultCommons> & bs.ToastProps;
