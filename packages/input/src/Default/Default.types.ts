import * as bs from 'react-bootstrap';
export interface InputDefaultCommons {
  theme?: 'Default' | 'Dark';
  size?: 'Sm' | 'Md' | 'Lg';
  prefix?: string;
  type?: string;
  inputProps: InputProps;
}

export interface InputProps {
  label?: InputLabel & bs.FormLabelProps;
  control: bs.FormControlProps;
}
export interface InputLabel {
  content: string;
}

export type InputDefaultProps = InputDefaultCommons & bs.FormGroupProps;
