import * as bs from 'react-bootstrap';
export interface TooltipDefaultCommons
  extends Omit<bs.OverlayTriggerProps, 'overlay'> {
  action?: JSX.Element;
  tooltip?: JSX.Element;
  popover?: {
    header?: JSX.Element;
    body?: JSX.Element;
  };
}

export type TooltipDefaultProps = TooltipDefaultCommons;
