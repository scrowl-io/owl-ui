import * as React from 'react';
import { Tooltip } from '../';
import { TooltipDefaultProps } from '../Default.types';

import { pxScale } from './Default-px-scale.stories';
import { theme } from './Default-theme.stories';
import { trigger } from './Default-trigger.stories';
import { placement } from './Default-placement.stories';

export const Default = (args: TooltipDefaultProps) => {
  const tipContent = <span>This is a tooltip</span>;
  const popContent = {
    header: <h3>Popover header</h3>,
    body: <div>Popover body</div>,
  };
  return (
    <>
      <Tooltip tooltip={tipContent}>
        <button>Tooltip</button>
      </Tooltip>
      <Tooltip popover={popContent}>
        <button>Popover</button>
      </Tooltip>
    </>
  );
};

Default.args = {
  pxScale: pxScale.defaultValue,
  theme: theme.defaultValue,
  trigger: trigger.defaultValue,
  placement: placement.defaultValue,
};

Default.argTypes = {
  pxScale,
  theme,
  trigger,
  placement,
};
