import React from 'react';
import * as bs from 'react-bootstrap';

export interface OptionProps {
  id: number;
  label: string;
}

export interface SelectDefaultCommons {
  theme?: 'Default' | 'Dark';
  size?: 'Sm' | 'Md' | 'Lg';
  prefix?: string;
  label?: string;
  selectoptions: OptionProps[];
}

export type SelectDefaultProps = SelectDefaultCommons & bs.FormSelectProps;
