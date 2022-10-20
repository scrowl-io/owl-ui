import React from 'react';
import {
  ThemeProvider,
  OverlayTrigger,
  Tooltip as BsTooltip,
  Popover,
} from 'react-bootstrap';
import { TooltipDefaultProps } from './Default.types';
import { themePrefixesProps } from '../../../../lib/src/utils';

export const Tooltip = ({
  children,
  tooltip,
  popover,
  ...props
}: TooltipDefaultProps) => {
  const themePrefixes: themePrefixesProps = {};
  const baseClass = 'tooltip';
  let content: TooltipDefaultProps['tooltip'];

  themePrefixes[baseClass] = `owlui-${baseClass}`;
  themePrefixes['popover'] = 'owlui-popover';
  themePrefixes['popover-header'] = 'owlui-popover-header';
  themePrefixes['popover-body'] = 'owlui-popover-body';

  if (tooltip) {
    content = <BsTooltip>{tooltip}</BsTooltip>;
  } else if (popover) {
    content = (
      <Popover>
        {!popover.header ? (
          ''
        ) : (
          <Popover.Header>{popover.header}</Popover.Header>
        )}
        {!popover.body ? '' : <Popover.Body>{popover.body}</Popover.Body>}
      </Popover>
    );
  } else {
    content = <></>;
  }

  return (
    <ThemeProvider prefixes={themePrefixes}>
      <OverlayTrigger {...props} overlay={content}>
        {children}
      </OverlayTrigger>
    </ThemeProvider>
  );
};

export default {
  Tooltip,
};
