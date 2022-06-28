import React from 'react';
import * as bs from 'react-bootstrap';

export interface AccordionItemProps {
  id: string;
  label: string;
  view: React.ReactNode;
}

export interface AccordionDefaultCommons {
  theme?: 'Default' | 'Dark';
  size?: 'Sm' | 'Md' | 'Lg';
  prefix?: string;
  items: AccordionItemProps[];
}

export type AccordionDefaultProps = AccordionDefaultCommons & bs.AccordionProps;
