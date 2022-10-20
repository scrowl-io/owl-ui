/* eslint-disable import/named */
/* eslint-disable import/namespace */
import React from 'react';
import * as bs from 'react-bootstrap';

export interface SelectDefaultCommons {
  theme?: 'Default' | 'Dark';
  pxScale?: 'Sm' | 'Md' | 'Lg';
  prefix?: string;
  type?: string;
  label: bs.FormLabelProps & {
    content: string;
  };
  control: {
    options: React.OptionHTMLAttributes<HTMLOptionElement>[];
  };
}

export type SelectDefaultProps = SelectDefaultCommons & bs.FormSelectProps;
