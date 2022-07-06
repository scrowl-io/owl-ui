import * as React from 'react';
import { Drawer } from '../index';
import { DrawerDefaultProps, DrawerProps } from '../Default.types';

import { theme } from './Default-theme.stories';
import { placement } from './Default-placement.stories';

const drawer: DrawerProps = {
  header: {
    content: <h2>Drawer Header</h2>,
    bsProps: {
      closeButton: true,
    },
  },
  body: (
    <p>
      Some text as <em>placeholder</em>. In real life you can have the elements
      you have chosen. Like, text, images, lists, etc.
    </p>
  ),
};

export const Default = (args: DrawerDefaultProps) => {
  const [show, setShow] = React.useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <button onClick={toggleShow}>Launch</button>
      <Drawer {...args} show={show} onHide={toggleShow} drawer={drawer} />
    </>
  );
};

Default.args = {
  theme: theme.defaultValue,
  placement: placement.defaultValue,
};

Default.argTypes = {
  theme,
  placement,
};
