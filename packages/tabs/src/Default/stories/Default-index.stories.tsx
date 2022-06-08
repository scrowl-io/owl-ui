import * as React from 'react';
import { component as Tabs } from '../index';
import { TabsDefaultProps } from '../Default.types';

import { appearance } from './Default-appearance.stories';
import { size } from './Default-size.stories';
import { theme } from './Default-theme.stories';

const items = [
  {
    id: '1',
    label: 'label 1',
    view: 'content 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: '2',
    label: 'label 2',
    view: 'content 2 - Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.',
  },
  {
    id: '3',
    label: 'label 3',
    view: 'content 3 - Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
  },
];

export const Default = (args: TabsDefaultProps) => (
  <Tabs {...args} defaultActiveKey="1">
    Hello World
  </Tabs>
);


Default.args = {
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
  items: items,
};

Default.argTypes = {
  appearance,
  size,
  theme,
  items,
};
