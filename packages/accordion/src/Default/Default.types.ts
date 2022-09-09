import React from 'react';
import * as bs from 'react-bootstrap';

export interface AccordionItemProps {
  id: string;
  label: React.ReactNode;
  view: React.ReactNode;
  labelAction?: React.ReactNode;
}

export interface AccordionDefaultCommons {
  theme?: 'Default' | 'Dark';
  pxScale?: 'Sm' | 'Md' | 'Lg';
  prefix?: string;
  items: AccordionItemProps[];
}

export type AccordionDefaultProps = AccordionDefaultCommons & bs.AccordionProps;
