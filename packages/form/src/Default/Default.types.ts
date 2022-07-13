import React from 'react';
import * as bs from 'react-bootstrap';

export interface FormFieldProps {
  id: number;
  label: string;
  controlId?: string;
  type: string;
  fieldProps?: React.InputHTMLAttributes<HTMLInputElement>;
}
export interface FormDefaultCommons {
  theme?: 'Default' | 'Dark';
  size?: 'Sm' | 'Md' | 'Lg';
  prefix?: string;
  variant?: string;
  formFields: FormFieldProps[];
}

export type FormDefaultProps = FormDefaultCommons & bs.FormProps;
