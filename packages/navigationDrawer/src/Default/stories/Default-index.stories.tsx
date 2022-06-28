import * as React from 'react';
import { NavigationDrawer } from '../index';
import {
  NavigationDrawerElementProps,
  NavigationDrawerContentTypes,
} from '../Default.types';

import { appearance } from './Default-appearance.stories';
import { theme } from './Default-theme.stories';

const Header = <div>Header</div>;
const items: Array<NavigationDrawerContentTypes> = [
  { label: 'Link 1' },
  { heading: 'CATEGORY 1', items: [{ label: 'Link 2' }, { label: 'Link 3' }] },
  { label: 'Link 4' },
  { heading: 'CATEGORY 2', items: [{ label: 'Link 5' }, { label: 'Link 6' }] },
];

export const Default = (args: NavigationDrawerElementProps) => (
  <NavigationDrawer {...args}>Hello World</NavigationDrawer>
);

Default.args = {
  appearance: appearance.defaultValue,
  theme: theme.defaultValue,
  header: Header,
  items: items,
};

Default.argTypes = {
  appearance,
  theme,
};
