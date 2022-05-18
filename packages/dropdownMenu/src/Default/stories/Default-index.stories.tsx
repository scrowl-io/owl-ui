import * as React from 'react';
import { component as DropdownMenu } from '../index';
import { DropdownMenuDefaultProps } from '../Default.types';

import { appearance } from './Default-appearance.stories';
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
];

const dropdown = {
  label: 'Select from Dropdown',
  selectedItem: '',
  items: items,
};

export const Default = (args: DropdownMenuDefaultProps) => (
  <DropdownMenu {...args}>
    <h1>Hello World</h1>
  </DropdownMenu>
);

Default.args = {
  appearance: 'Default',
  size: 'Lg',
  theme: 'Default',
  dropdown: dropdown,
};

Default.argTypes = {
  appearance,
  size,
  theme,
};
