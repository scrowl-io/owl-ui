import * as bs from 'react-bootstrap';

export interface NavDefaultCommons {
  theme?: 'Default' | 'Dark';
  prefix?: string;
}

export type NavDefaultProps = NavDefaultCommons & bs.NavProps;
