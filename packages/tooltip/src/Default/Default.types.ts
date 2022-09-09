import React from 'react';
import * as bs from 'react-bootstrap';
export interface TooltipDefaultCommons {
  theme?: 'Default' | 'Dark';
  pxScale?: 'Sm' | 'Md' | 'Lg';
  prefix?: string;
  tooltipContent: TooltipContent;
  tooltipTrigger: (props: object) => JSX.Element | JSX.Element[];
}

export interface TooltipContent {
  header?: React.ReactNode;
  content: React.ReactNode;
  bsProps?: bs.TooltipProps | bs.PopoverProps;
}

export type TooltipDefaultProps = TooltipDefaultCommons;
