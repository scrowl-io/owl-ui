import * as React from 'react';
import { component as Table } from '../index';
import { TableDefaultProps } from '../Default.types';

import { appearance } from './Default-appearance.stories';
import { outline } from './Default-outline.stories';
import { theme } from './Default-theme.stories';

export const Default = (args: TableDefaultProps) => (
  <Table {...args}>
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
      </tr>
    </thead>
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
