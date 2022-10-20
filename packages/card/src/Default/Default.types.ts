import * as bs from 'react-bootstrap';

export interface CardDefaultCommons {
  prefix?: string;
  theme?: 'Default' | 'Dark';
  pxScale?: 'Sm' | 'Md' | 'Lg';
}

export type CardDefaultProps = Partial<CardDefaultCommons> & bs.CardProps;
