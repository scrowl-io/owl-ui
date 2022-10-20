/* eslint-disable import/named */
/* eslint-disable import/namespace */
import * as bs from 'react-bootstrap';
import { FormRangeProps } from 'react-bootstrap/esm/FormRange';
export interface RangeDefaultCommons {
  theme?: 'Default' | 'Dark';
  pxScale?: 'Sm' | 'Md' | 'Lg';
  prefix?: string;
  type?: string;
  label: bs.FormLabelProps & {
    content: string;
  };
  control: FormRangeProps;
}

export type RangeDefaultProps = RangeDefaultCommons & bs.FormGroupProps;
