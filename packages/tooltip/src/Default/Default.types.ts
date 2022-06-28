import React from 'react';
import * as bs from 'react-bootstrap';

export interface TooltipDefaultCommons {
  theme?: 'Default' | 'Dark';
  size?: 'Sm' | 'Md' | 'Lg';
  prefix?: string;
  children: React.ReactNode;
  placement: string;
  trigger: string[];
  variant: string;
  header: string;
  content: React.ReactElement;
  type?: string;
}

export interface themePrefixesProps {
  [key: string]: string;
}

export type TooltipDefaultProps = TooltipDefaultCommons & bs.OverlayProps;
