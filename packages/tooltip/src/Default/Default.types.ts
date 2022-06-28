import React from 'react';
import * as bs from 'react-bootstrap';
import { OverlayTriggerType } from 'react-bootstrap/cjs/OverlayTrigger';
export interface TooltipDefaultCommons {
  theme?: 'Default' | 'Dark';
  size?: 'Sm' | 'Md' | 'Lg';
  prefix?: string;
  children?: JSX.Element | JSX.Element[];
  placement: string;
  trigger: OverlayTriggerType | OverlayTriggerType[] | undefined;
  header: string;
  targetElement: (props: object) => JSX.Element | JSX.Element[];
  popover?: boolean;
  rootClose: boolean;
}

export type TooltipDefaultProps = TooltipDefaultCommons & bs.OverlayProps;
