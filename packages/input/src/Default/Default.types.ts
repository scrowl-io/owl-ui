import * as bs from 'react-bootstrap';
export interface TextInputDefaultCommons {
  theme?: 'Default' | 'Dark';
  pxScale?: 'Sm' | 'Md' | 'Lg';
  prefix?: string;
  type?: string;
  label?: InputLabel & bs.FormLabelProps;
  control: bs.FormControlProps;
}
export interface InputLabel {
  content: string;
}

export type TextInputDefaultProps = TextInputDefaultCommons & bs.FormGroupProps;
