import * as bs from 'react-bootstrap';

export interface CloseButtonDefaultCommons {
  pxScale?: 'Sm' | 'Md' | 'Lg';
  prefix?: string;
}

export type CloseButtonDefaultProps = CloseButtonDefaultCommons &
  bs.CloseButtonProps;
