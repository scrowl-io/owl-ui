import * as React from 'react';
import { component as Tooltip } from '../index';
import { TooltipDefaultProps } from '../Default.types';

import { size } from './Default-size.stories';
import { theme } from './Default-theme.stories';
import { trigger } from './Default-trigger.stories';
import { popover } from './Default-popover.stories';
import { placement } from './Default-placement.stories';

const DemoParagraphOne = () => (
  <p style={{ display: 'inline' }}>
    This is a paragraph to demonstrate the&nbsp;
  </p>
);

const DemoParagraphTwo = () => (
  <p style={{ display: 'inline' }}>. Wrap your tooltips in blocks of text.</p>
);

export const Default = (args: TooltipDefaultProps) => {
  // const rootClose = true;
  const header = 'Popover Header';

  const targetElement = (props: object) => {
    return (
      <span
        id="popover-button"
        {...props}
        style={{
          fontWeight: '700',
          borderBottom: '3px solid black',
          marginBottom: '2em',
        }}
      >
        Tooltip/Popover
      </span>
    );
  };

  return (
    <>
      <DemoParagraphOne />
      <Tooltip
        {...args}
        header={header}
        // rootClose={rootClose}
        targetElement={targetElement}
      >
        <p>Inside the tooltip</p>
      </Tooltip>
      <DemoParagraphTwo />
    </>
  );
};

Default.args = {
  size: size.defaultValue,
  theme: theme.defaultValue,
  trigger: trigger.defaultValue,
  popover: popover.defaultValue,
  placement: placement.defaultValue,
};

Default.argTypes = {
  size,
  theme,
  trigger,
  popover,
  placement,
};
