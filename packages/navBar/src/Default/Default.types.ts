import * as bs from 'react-bootstrap';

export interface NavBarDefaultCommons {
  theme?: 'light' | 'dark' | undefined;
  size?: 'Sm' | 'Md' | 'Lg';
  prefix?: string;
}

export type NavBarDefaultProps = NavBarDefaultCommons & bs.NavbarProps;
