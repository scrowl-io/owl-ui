import React from 'react';
import * as bs from 'react-bootstrap';
import { InputDefaultProps } from '../../../input/src';
import { RangeDefaultProps } from '../../../range/src/Default';
import { SelectDefaultProps } from '../../../select/src';

// export interface FormFieldProps {
//   id: number;
//   label: string;
//   controlId?: string;
//   type: string;
//   fieldProps?: React.InputHTMLAttributes<HTMLInputElement>;
// }

export interface FormDefaultCommons {
  theme?: 'Default' | 'Dark';
  prefix?: string;
  children: React.ReactNode;
  formData: FormDataProps[];
}

export type FormDataProps =
  | InputDefaultProps
  | RangeDefaultProps
  | SelectDefaultProps;

export type FormDefaultProps = FormDefaultCommons & bs.FormProps;
