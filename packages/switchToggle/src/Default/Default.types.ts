import * as bs from 'react-bootstrap';

export interface SwitchToggleDefaultCommons {
  theme?: 'Default' | 'Dark';
  size?: 'Sm' | 'Md' | 'Lg';
  prefix?: string;
  inputProps: SwitchProps;
}
export interface SwitchProps {
  label: SwitchLabel & bs.FormLabelProps;
  control: bs.FormCheckProps;
}
export interface SwitchLabel {
  content: string;
}

export type SwitchToggleDefaultProps = SwitchToggleDefaultCommons &
  bs.FormCheckProps;
