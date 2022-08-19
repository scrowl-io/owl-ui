import * as bs from 'react-bootstrap';
export interface TextInputDefaultCommons {
  theme?: 'Default' | 'Dark';
  size?: 'Sm' | 'Md' | 'Lg';
  prefix?: string;
  type?: string;
  inputProps: TextInputProps;
}

export interface TextInputProps {
  key: string;
  label?: InputLabel & bs.FormLabelProps;
  control: bs.FormControlProps;
}
export interface InputLabel {
  content: string;
}

export type TextInputDefaultProps = TextInputDefaultCommons & bs.FormGroupProps;
