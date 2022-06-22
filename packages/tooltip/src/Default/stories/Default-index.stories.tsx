import * as React from 'react';
import { component as Tooltip } from '../index';
import { TooltipDefaultProps } from '../Default.types';
import { Button } from 'react-bootstrap';
// import { component as Button } from '../../../../button/src/Default/index';

import { variant } from './Default-variant.stories';
import { size } from './Default-size.stories';
import { theme } from './Default-theme.stories';
// import { trigger } from './Default-trigger.stories';

export const Default = (args: TooltipDefaultProps) => {
  const target = React.useRef(null);
  const [show, setShow] = React.useState(false);
  // const [popoverShow, setPopoverShow] = React.useState(false);

  const placement = 'bottom';
  const trigger = ['hover'];
  const rootClose = true;

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
        target={target}
        show={show}
        placement={placement}
        trigger={trigger}
        rootClose={rootClose}
        // popoverShow={popoverShow}
        // setPopoverShow={setPopoverShow}
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
