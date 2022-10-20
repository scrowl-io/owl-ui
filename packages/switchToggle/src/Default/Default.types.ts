import * as bs from 'react-bootstrap';

export interface SwitchToggleDefaultCommons {
  theme?: 'Default' | 'Dark';
  pxScale?: 'Sm' | 'Md' | 'Lg';
  prefix?: string;
  label: bs.FormLabelProps & {
    content: string;
  };
  control: bs.FormCheckProps;
}

export type SwitchToggleDefaultProps = SwitchToggleDefaultCommons &
  bs.FormCheckProps;
