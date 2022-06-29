import React from 'react';
import * as bs from 'react-bootstrap';

export interface NavDefaultCommons {
  theme?: 'Default' | 'Dark';
  size?: 'Sm' | 'Md' | 'Lg';
  prefix?: string;
  disabled?: boolean;
}

export type NavDefaultProps = Partial<NavDefaultCommons> & bs.NavProps;
