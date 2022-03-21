import * as React from 'react';
import { component as Table } from '../index';
import { component as TableHeader } from '../../Header/index';
import { TableDefaultProps } from '../Default.types';

import { appearance } from './Default-appearance.stories';
import { outline } from './Default-outline.stories';
import { theme } from './Default-theme.stories';

export const Default = (args: TableDefaultProps) => (
  <Table {...args}>
    <TableHeader columns={columns} />
    <tbody>
      <tr>
        <td>1</td>
        <td>Cicero</td>
        <td>Fonseca</td>
        <td>cfonseca</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Christopher</td>
        <td>Aube</td>
        <td>caube</td>
      </tr>
      <tr>
        <td>3</td>
        <td colSpan={2}>Sezar Gantous</td>
        <td>sgantous</td>
      </tr>
    </tbody>
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
    firstName: 'Cicero',
    lastName: 'Fonseca',
    userName: 'cfonseca',
  },
  {
    id: 2,
    firstName: 'Scott',
    lastName: 'Vincent',
    userName: 'svincent',
  },
  {
    id: 3,
    firstName: 'Chris',
    lastName: 'Aube',
    userName: 'caube',
  },
  {
    id: 4,
    firstName: 'Sezar',
    lastName: 'Gantous',
    userName: 'sgantous',
  },
];
