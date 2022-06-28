import * as bs from 'react-bootstrap';

export interface SpinnerDefaultCommons {
  theme?: 'Default' | 'Dark';
  size?: 'Sm' | 'Md' | 'Lg';
  prefix?: string;
}

export type SpinnerDefaultProps = SpinnerDefaultCommons & bs.SpinnerProps;
