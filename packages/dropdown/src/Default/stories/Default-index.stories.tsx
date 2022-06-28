import * as React from 'react';
import { Dropdown } from '../index';
import { DropdownDefaultProps } from '../Default.types';

import { variant } from './Default-variant.stories';
import { size } from './Default-size.stories';
import { theme } from './Default-theme.stories';

const items = [
  {
    id: '1',
    label: 'Item 1',
    value: undefined,
  },
  {
    id: '2',
    label: 'Item 2',
    value: undefined,
  },
  {
    id: '3',
    label: 'Item 3',
    value: undefined,
  },
  {
    id: '4',
    label: 'Item 4',
    value: undefined,
  },
  {
    id: '5',
    label: 'Item 5',
    value: undefined,
  },
  {
    id: '6',
    label: 'Item 6',
    value: undefined,
  },
  {
    id: '7',
    label: 'Item 7',
    value: undefined,
  },
  {
    id: '8',
    label: 'Item 8',
    value: undefined,
  },
  {
    id: '9',
    label: 'Item 9',
    value: undefined,
  },
];

export const Default = (args: DropdownDefaultProps) => <Dropdown {...args} />;

Default.args = {
  variant: variant.defaultValue,
  size: size.defaultValue,
  theme: theme.defaultValue,
  items: items,
};

Default.argTypes = {
  variant,
  size,
  theme,
};
