import * as React from 'react';
import { component as Table } from '../index';
import { TableDefaultProps } from '../Default.types';

import { appearance } from './Default-appearance.stories';
import { size } from './Default-size.stories';
import { theme } from './Default-theme.stories';

export const Default = (args: TableDefaultProps) => (
  <Table {...args}>Hello World</Table>
);

Default.args = {
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Default.argTypes = {
  appearance,
  size,
  theme,
};
