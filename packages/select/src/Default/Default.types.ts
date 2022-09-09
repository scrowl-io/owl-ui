/* eslint-disable import/named */
/* eslint-disable import/namespace */
import React from 'react';
import * as bs from 'react-bootstrap';
export interface SelectDefaultCommons {
  theme?: 'Default' | 'Dark';
  pxScale?: 'Sm' | 'Md' | 'Lg';
  prefix?: string;
  type?: string;
  inputProps: SelectProps;
}
export interface SelectProps {
  id?: string;
  label: SelectLabel & bs.FormLabelProps;
  control: SelectOptions;
}
export interface SelectLabel {
  content: string;
}

export interface SelectOptions extends bs.FormSelectProps {
  options: React.OptionHTMLAttributes<HTMLOptionElement>[];
}

export type SelectDefaultProps = SelectDefaultCommons;
