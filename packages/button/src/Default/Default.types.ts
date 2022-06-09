import * as bs from 'react-bootstrap';

export interface ButtonDefaultCommons {
  prefix?: string;
  theme?: 'Default' | 'Dark';
  size?: 'Lg' | 'Md' | 'Sm';
}
export interface themePrefixesProps {
  [key: string]: string;
}

export type ButtonDefaultProps = Partial<ButtonDefaultCommons> & bs.ButtonProps;
