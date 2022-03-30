import * as React from 'react';
import { component as NavigationDrawer } from '../index';
import {
  NavigationDrawerDefaultProps,
  NavigationDrawerContentTypes,
} from '../Default.types';

import { appearance } from './Default-appearance.stories';
import { size } from './Default-size.stories';
import { theme } from './Default-theme.stories';

const Header = <div>Header</div>;
const items: Array<NavigationDrawerContentTypes> = [
  { label: 'Link 1' },
  { heading: 'CATEGORY 1', items: [{ label: 'Link 2' }, { label: 'Link 3' }] },
  { label: 'Link 4' },
  { heading: 'CATEGORY 2', items: [{ label: 'Link 5' }, { label: 'Link 6' }] },
];

export const Default = (args: NavigationDrawerDefaultProps) => (
  <NavigationDrawer {...args}>Hello World</NavigationDrawer>
);

Default.args = {
  appearance: appearance.defaultValue,
  size: size.defaultValue,
  theme: theme.defaultValue,
  header: Header,
  items: items,
};

Default.argTypes = {
  appearance,
  size,
  theme,
};
