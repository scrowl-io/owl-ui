import * as React from 'react';
import { component as DropdownList } from '../index';
import { DropdownListDefaultProps } from '../Default.types';

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

const dropdown = {
  label: 'Select from Dropdown',
  selectedItem: '',
  items: items,
};

export const Default = (args: DropdownListDefaultProps) => (
  <DropdownList {...args}>Hello World</DropdownList>
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
