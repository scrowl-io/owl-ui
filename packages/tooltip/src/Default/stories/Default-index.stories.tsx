import * as React from 'react';
import { component as Tooltip } from '../index';
import { TooltipDefaultProps } from '../Default.types';

import { variant } from './Default-variant.stories';
import { size } from './Default-size.stories';
import { theme } from './Default-theme.stories';
import { trigger } from './Default-trigger.stories';

export const Default = (args: TooltipDefaultProps) => {
  const placement = 'right';
  const rootClose = true;
  const popoverHeader = 'Test Header';
  const trigger = ['click'];
  const type = 'tooltip';

  const targetElement = (props: object) => {
    return (
      <a id="popover-button" {...props}>
        Popover style
      </a>
    );
  };

  return (
    <>
      <Tooltip
        {...args}
        type={type}
        popoverHeader={popoverHeader}
        placement={placement}
        rootClose={rootClose}
        trigger={trigger}
        targetElement={targetElement}
      >
        <p>Inside the tooltip</p>
      </Tooltip>
    </>
  );
};

Default.args = {
  variant: variant.defaultValue,
  size: size.defaultValue,
  theme: theme.defaultValue,
  trigger: trigger.defaultValue,
};

Default.argTypes = {
  variant,
  size,
  theme,
  trigger,
};
