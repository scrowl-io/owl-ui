import * as React from 'react';
import { component as Table } from '../index';
import { TableDefaultProps } from '../Default.types';

import { variant } from './Default-variant.stories';
import { hover, striped, bordered } from './Default-table.stories';
import { size } from './Default-size.stories';
import { theme } from './Default-theme.stories';

const tableData = {
  caption: 'Table 1. List of The Office characters.',
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

export const Default = (args: TableDefaultProps) => <Table {...args} />;

Default.args = {
  variant: variant.defaultValue,
  striped: striped.defaultValue,
  hover: hover.defaultValue,
  bordered: bordered.defaultValue,
  size: size.defaultValue,
  theme: 'Default',
  tableData: tableData,
};

Default.argTypes = {
  variant,
  size,
  theme,
};
