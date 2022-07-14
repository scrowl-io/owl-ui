/* eslint-disable import/named */
/* eslint-disable import/namespace */
import * as bs from 'react-bootstrap';
import { FormRangeProps } from 'react-bootstrap/esm/FormRange';
export interface RangeDefaultCommons {
  theme?: 'Default' | 'Dark';
  size?: 'Sm' | 'Md' | 'Lg';
  prefix?: string;
  type?: string;
  inputProps: RangeProps;
}

export interface RangeProps {
  label: RangeLabel & bs.FormLabelProps;
  control: FormRangeProps;
}
export interface RangeLabel {
  content: string;
}

export type RangeDefaultProps = RangeDefaultCommons & bs.FormGroupProps;
