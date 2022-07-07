import React from 'react';
import * as bs from 'react-bootstrap';

export interface NavBarDefaultCommons {
  theme?: 'Default' | 'Dark';
  size?: 'Sm' | 'Md' | 'Lg';
  prefix?: string;
  bsPrefix?: string;
  linkColor?: 'light' | 'dark' | undefined;
}

export type NavBarDefaultProps = Partial<NavBarDefaultCommons> & bs.NavbarProps;