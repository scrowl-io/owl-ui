import * as bs from 'react-bootstrap';

export interface ButtonDefaultCommons {
  prefix?: string;
  theme?: 'Default' | 'Dark';
  pxScale?: 'lg' | '' | 'sm';
}

export type ButtonDefaultProps = Partial<ButtonDefaultCommons> & bs.ButtonProps;
