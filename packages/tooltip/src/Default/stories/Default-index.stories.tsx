import * as React from 'react';
import { component as Tooltip } from '../index';
import { TooltipDefaultProps } from '../Default.types';

import { size } from './Default-size.stories';
import { theme } from './Default-theme.stories';
import { trigger } from './Default-trigger.stories';
import { placement } from './Default-placement.stories';

export const Default = (args: TooltipDefaultProps) => {
  const tooltipTrigger = (props: object) => {
    return (
      <span
        {...props}
        style={{
          fontWeight: '700',
        }}
      >
        Tooltip
      </span>
    );
  };

  const tooltipContent = {
    content: <p>Inside the tooltip.</p>,
  };

  const popoverTrigger = (props: object) => {
    return (
      <span
        {...props}
        style={{
          fontWeight: '700',
        }}
      >
        Popover
      </span>
    );
  };

  const popoverContent = {
    header: <>Popover Header</>,
    content: <p>Inside the popover.</p>,
  };

  return (
    <>
      <div>
        Paragraph wrapping the{' '}
        <Tooltip
          {...args}
          tooltipContent={tooltipContent}
          tooltipTrigger={tooltipTrigger}
        />
        .
      </div>
      <div>
        Paragraph wrapping the{' '}
        <Tooltip
          {...args}
          tooltipContent={popoverContent}
          tooltipTrigger={popoverTrigger}
        />
        .
      </div>
    </>
  );
};

Default.args = {
  size: size.defaultValue,
  theme: theme.defaultValue,
  trigger: trigger.defaultValue,
  placement: placement.defaultValue,
};

Default.argTypes = {
  size,
  theme,
  trigger,
  placement,
};
