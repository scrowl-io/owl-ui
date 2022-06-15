import React from 'react';
import * as bs from 'react-bootstrap';

export interface CarouselDefaultCommons {
  theme?: 'Default' | 'Dark';
  size?: 'Sm' | 'Md' | 'Lg';
  prefix?: string;
}

export interface themePrefixesProps {
  [key: string]: string;
}

export type CarouselDefaultProps = Partial<CarouselDefaultCommons> &
  React.AllHTMLAttributes<HTMLDivElement>;
