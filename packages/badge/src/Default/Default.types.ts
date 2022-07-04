import * as bs from 'react-bootstrap';

export interface BadgeDefaultCommons {
  theme?: 'Default' | 'Dark';
  prefix?: string;
}

export type BadgeDefaultProps = BadgeDefaultCommons & bs.BadgeProps;
