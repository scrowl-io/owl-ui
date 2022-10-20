import * as React from 'react';
import { ListGroup } from '../';
import { ListgroupDefaultProps, ListgroupItemProps } from '../Default.types';

import { theme } from './Default-theme.stories';
import { numbered } from './Default-numbered.stories';
import { horizontal } from './Default-horizontal.stories';
import { variant } from './Default-variant.stories';

const items: ListgroupItemProps[] = [
  {
    id: '1',
    header: 'Dapibus ac facilisis in',
    bsProps: {
      variant: 'primary',
    },
  },
  {
    id: '2',
    header: (
      <div className="d-flex">
        <img
          width="30"
          height="30"
          src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-clipboard-512.png"
          alt="osg logo"
        />
        <a href="https://osg.ca">Harassment Report.pdf</a>
      </div>
    ),
    description: (
      <p className="description">
        Report from 2017 explaining the Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    ),
    bsProps: {
      variant: 'danger',
    },
  },
  {
    id: '3',
    header: 'Morbi leo risus',
    bsProps: {
      href: 'http://www.google.com',
      as: 'a',
      variant: 'success',
    },
  },
  {
    id: '4',
    header: 'Porta ac consectetur ac',
  },
  {
    id: '5',
    header:
      'Changes the flow of the list group items from vertical to horizontal',
    bsProps: {
      href: 'http://www.osg.ca',
      action: true,
      variant: 'warning',
    },
  },
];

export const Default = (args: ListgroupDefaultProps) => <ListGroup {...args} />;

Default.args = {
  theme: theme.defaultValue,
  numbered: numbered.defaultValue,
  horizontal: horizontal.defaultValue,
  variant: variant.defaultValue,
  items: items,
};

Default.argTypes = {
  theme,
  numbered,
  horizontal,
  variant,
};
