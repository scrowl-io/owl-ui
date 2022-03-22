import * as React from 'react';
import { component as Table } from '../index';
import { component as TableHeader } from '../../Header/index';
import { component as TableBody } from '../../Body/index';
import { TableDefaultProps } from '../Default.types';

import { appearance } from './Default-appearance.stories';
import { outline } from './Default-outline.stories';
import { theme } from './Default-theme.stories';

export const Default = (args: TableDefaultProps) => (
  <Table {...args}>
    <TableHeader columns={columns} />
    <TableBody items={items} />
  </Table>
);

Default.args = {
  appearance: 'Default',
  outline: true,
  theme: 'Default',
};

Default.argTypes = {
  appearance,
  outline,
  theme,
};

const columns = [
  {
    label: '#',
  },
  {
    label: 'First Name',
  },
  {
    label: 'Last Name',
  },
  {
    label: 'Username',
  },
];

const items = [
  {
    id: 1,
    firstName: 'Michael',
    lastName: 'Scott',
    userName: 'mscott',
  },
  {
    id: 2,
    firstName: 'Oscar',
    lastName: 'Martinez',
    userName: 'omartinez',
  },
  {
    id: 3,
    firstName: 'Meredith',
    lastName: 'Palmer',
    userName: 'mpalmer',
  },
  {
    id: 4,
    firstName: 'Jan',
    lastName: 'Levinson',
    userName: 'jlevinson',
  },
];
