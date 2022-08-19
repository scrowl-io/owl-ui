import React from 'react';
import * as bs from 'react-bootstrap';
import { TextInputDefaultProps } from '../../../input/src/Default/Default.types';
import { RangeDefaultProps } from '../../../range/src/Default';
import { SelectDefaultProps } from '../../../select/src';
export interface FormDefaultCommons {
  theme?: 'Default' | 'Dark';
  prefix?: string;
  children: React.ReactNode;
  formData: FormDataProps[];
}

export type FormDataProps =
  | TextInputDefaultProps
  | RangeDefaultProps
  | SelectDefaultProps;

export type FormDefaultProps = FormDefaultCommons & Partial<bs.FormProps>;
