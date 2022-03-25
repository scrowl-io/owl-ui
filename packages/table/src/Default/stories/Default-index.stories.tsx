import * as React from 'react';
import { component as Table } from '../index';
import { TableDefaultProps } from '../Default.types';

import { appearance } from './Default-appearance.stories';
import { outline } from './Default-outline.stories';
import { theme } from './Default-theme.stories';

export const Default = (args: TableDefaultProps) => <Table {...args} />;

Default.args = {
  appearance: 'Default',
  outline: true,
  theme: 'Default',
  columns: [
    {
      label: '#',
      field: 'id',
    },
    {
      label: 'First Name',
      field: 'firstName',
    },
    {
      label: 'Last Name',
      field: 'lastName',
    },
    {
      label: 'Username',
      field: 'userName',
    },
  ],
  items: [
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
  ],
};

Default.argTypes = {
  appearance,
  outline,
  theme,
};
