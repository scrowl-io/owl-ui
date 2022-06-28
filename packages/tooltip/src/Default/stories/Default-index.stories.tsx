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

  const placement = 'left';
  const rootClose = true;
  const header = 'Test Header';
  const trigger = ['click'];
  const type = 'tooltip';

  const content = props => (
    <button id="popover-button" variant="primary" {...props}>
      Popover style
    </button>
  );

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
        type={type}
        header={header}
        target={target.current}
        show={show}
        placement={placement}
        rootClose={rootClose}
        trigger={trigger}
        content={content}
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
