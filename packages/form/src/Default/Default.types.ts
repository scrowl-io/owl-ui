import React from 'react';
import * as bs from 'react-bootstrap';

export interface FormFieldProps {
  id: number;
  label: string;
  controlId: string;
  type: string;
  fieldProps: {
    placeholder: string;
    text: string;
    min: number;
    max: number;
    options: [
      {
        id: number;
        label: string;
      }
    ];
  };
}
export interface FormDefaultCommons {
  theme?: 'Default' | 'Dark';
  size?: 'Sm' | 'Md' | 'Lg';
  prefix?: string;
  variant?: string;
  formFields: FormFieldProps[];
}

export type FormDefaultProps = FormDefaultCommons & bs.FormProps;
