import * as bs from 'react-bootstrap';

export interface NavDefaultCommons {
  theme?: 'Default' | 'Dark';
  prefix?: string;
  pxScale?: 'Sm' | 'Md' | 'Lg';
}

export type NavDefaultProps = NavDefaultCommons & bs.NavProps;
