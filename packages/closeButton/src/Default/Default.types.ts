import * as bs from 'react-bootstrap';

export interface CloseButtonDefaultCommons {
  size?: 'Sm' | 'Md' | 'Lg';
  prefix?: string;
}

export type CloseButtonDefaultProps = CloseButtonDefaultCommons &
  bs.CloseButtonProps;
