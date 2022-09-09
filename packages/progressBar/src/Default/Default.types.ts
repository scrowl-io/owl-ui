import * as bs from 'react-bootstrap';

export interface ProgressBarDefaultCommons {
  theme?: 'Default' | 'Dark';
  pxScale?: 'Sm' | 'Md' | 'Lg';
  prefix?: string;
  showLabel?: boolean;
}

export type ProgressBarDefaultProps = ProgressBarDefaultCommons &
  bs.ProgressBarProps;
