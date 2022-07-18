import * as React from 'react';
import { NavigationDrawer } from '../index';
import {
  NavigationDrawerElementProps,
  NavigationDrawerContentTypes,
  NavigationDrawerHeader,
} from '../Default.types';

import { theme } from './Default-theme.stories';

const Header: NavigationDrawerHeader = {
  content: <div>Header</div>,
  closeButton: true,
};

const items: Array<NavigationDrawerContentTypes> = [
  { label: 'Link 1' },
  {
    heading: 'CATEGORY 1',
    items: [{ label: 'Link 2', url: 'test' }, { label: 'Link 3' }],
  },
  { label: 'Link 4' },
  { heading: 'CATEGORY 2', items: [{ label: 'Link 5' }, { label: 'Link 6' }] },
];

export const Default = (args: NavigationDrawerElementProps) => {
  const [show, setShow] = React.useState(false);

  return (
    <>
      <button onClick={() => setShow(!show)}>Launch</button>

      <NavigationDrawer {...args} show={show} onHide={() => setShow(!show)} />
    </>
  );
};

Default.args = {
  theme: theme.defaultValue,
  header: Header,
  items: items,
};

Default.argTypes = {
  theme,
};
