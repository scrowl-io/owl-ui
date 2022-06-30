import * as React from 'react';
import { Listgroup } from '../index';
import { ListgroupDefaultProps } from '../Default.types';

import { variant } from './Default-variant.stories';
import { size } from './Default-size.stories';
import { theme } from './Default-theme.stories';
import { numbered } from './Default-numbered.stories';
import { horizontal } from './Default-horizontal.stories';
import { color } from './Default-color.stories';

const items = [
  {
    id: '1',
    content: 'Dapibus ac facilisis in',
    variant: 'primary',
  },
  {
    id: '2',
    content: 'Cras justo odio',
    variant: 'secondary',
  },
  {
    id: '3',
    content: 'Morbi leo risus',
    variant: 'success',
  },
  {
    id: '4',
    content: 'Porta ac consectetur ac',
    variant: 'danger',
  },
  {
    id: '5',
    content:
      'Changes the flow of the list group items from vertical to horizontal',
    variant: 'warning',
  },
];

export const Default = (args: ListgroupDefaultProps) => <Listgroup {...args} />;

Default.args = {
  variant: variant.defaultValue,
  size: size.defaultValue,
  theme: theme.defaultValue,
  numbered: numbered.defaultValue,
  horizontal: horizontal.defaultValue,
  color: color.defaultValue,
  items: items,
};

Default.argTypes = {
  variant,
  size,
  theme,
  numbered,
  horizontal,
  color,
};
