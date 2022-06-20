import * as React from 'react';
import { component as Tooltip } from '../index';
import { TooltipDefaultProps } from '../Default.types';
import { Button } from 'react-bootstrap';

import { variant } from './Default-variant.stories';
import { size } from './Default-size.stories';
import { theme } from './Default-theme.stories';

export const Default = (args: TooltipDefaultProps) => {
  const target = React.useRef(null);
  // const [show, setShow] = React.useState(false);

  let show = true;

  return (
    <>
      <Button
        ref={target}
        onClick={() => {
          console.log(show, target);
          show = !show;
        }}
      >
        Click me!
      </Button>
      <Tooltip {...args} target={target.current} show={show}>
        <p>Hello World</p>
      </Tooltip>
    </>
  );
};

Default.args = {
  variant: variant.defaultValue,
  size: size.defaultValue,
  theme: theme.defaultValue,
};

Default.argTypes = {
  variant,
  size,
  theme,
};
