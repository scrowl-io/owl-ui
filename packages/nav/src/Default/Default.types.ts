import React from 'react';
import * as bs from 'react-bootstrap';

export interface NavDefaultCommons {
  theme?: 'Default' | 'Dark';
  size?: 'Sm' | 'Md' | 'Lg';
  prefix?: string;
  alignment?: string;
  navLinks?: Array<NavLinks>;
  disabled?: boolean;
}

export interface NavLinks {
  eventKey?: string;
  label?: string;
  href?: string;
  disabled?: boolean;
}

export type NavDefaultProps = Partial<NavDefaultCommons> & bs.NavProps;
