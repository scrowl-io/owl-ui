import React from 'react';
import * as bs from 'react-bootstrap';

export interface RangeProps {
  id: string;
  label: string;
  optionalprops: {
    disabled: boolean;
    min: number;
    max: number;
  };
}

export interface RangeDefaultCommons {
  theme?: 'Default' | 'Dark';
  size?: 'Sm' | 'Md' | 'Lg';
  prefix?: string;
  rangeProps: RangeProps;
}

export type RangeDefaultProps = RangeDefaultCommons & bs.FormProps;
