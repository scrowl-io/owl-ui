import * as React from 'react';
import { component as Tooltip } from '../index';
import { TooltipDefaultProps } from '../Default.types';
import { Button } from 'react-bootstrap';

import { variant } from './Default-variant.stories';
import { size } from './Default-size.stories';
import { theme } from './Default-theme.stories';
// import { trigger } from './Default-trigger.stories';

export const Default = (args: TooltipDefaultProps) => {
  const target = React.useRef(null);
  const [show, setShow] = React.useState(false);

  const placement = 'right';
  const rootClose = true;
  const header = 'Test Header';
  const trigger = ['click'];

  return (
    <>
      <Button
        ref={target}
        onClick={() => {
          setShow(!show);
        }}
      >
        Click me!
      </Button>
      <Tooltip
        {...args}
        header={header}
        target={target.current}
        show={show}
        placement={placement}
        rootClose={rootClose}
        trigger={trigger}
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
  // trigger: trigger.defaultValue,
};

Default.argTypes = {
  variant,
  size,
  theme,
  // trigger,
};
