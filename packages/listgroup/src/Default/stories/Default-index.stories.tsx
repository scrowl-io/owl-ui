import * as React from 'react';
import { Listgroup } from '../index';
import { ListgroupDefaultProps, ListgroupItemProps } from '../Default.types';

import { size } from './Default-size.stories';
import { theme } from './Default-theme.stories';
import { numbered } from './Default-numbered.stories';
import { horizontal } from './Default-horizontal.stories';
import { variant } from './Default-variant.stories';

const items: ListgroupItemProps[] = [
  {
    id: '1',
    content: 'Dapibus ac facilisis in',
    bsProps: {
      variant: 'primary',
    },
  },
  {
    id: '2',
    content: 'Cras justo odio',
  },
  {
    id: '3',
    content: 'Morbi leo risus',
    bsProps: {
      href: 'http://www.google.com',
      as: 'a',
      variant: 'success',
    },
  },
  {
    id: '4',
    content: 'Porta ac consectetur ac',
  },
  {
    id: '5',
    content:
      'Changes the flow of the list group items from vertical to horizontal',
    bsProps: {
      href: 'http://www.osg.ca',
      action: true,
      variant: 'warning',
    },
  },
];

export const Default = (args: ListgroupDefaultProps) => <Listgroup {...args} />;

Default.args = {
  size: size.defaultValue,
  theme: theme.defaultValue,
  numbered: numbered.defaultValue,
  horizontal: horizontal.defaultValue,
  variant: variant.defaultValue,
  items: items,
};

Default.argTypes = {
  size,
  theme,
  numbered,
  horizontal,
  variant,
};
