import * as React from 'react';
import { Tabs } from '../index';
import { TabsDefaultProps } from '../Default.types';

import { appearance } from './Default-appearance.stories';
import { pxScale } from './Default-px-scale.stories';
import { theme } from './Default-theme.stories';

const items = [
  {
    id: '1',
    title: 'label 1',
    view: 'content 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: '2',
    title: 'label 2',
    view: 'content 2 - Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.',
  },
  {
    id: '3',
    title: 'label 3',
    view: 'content 3 - Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
  },
];

export const Default = (args: TabsDefaultProps) => (
  <Tabs {...args} defaultActiveKey="3" />
);

Default.args = {
  appearance: appearance.defaultValue,
  pxScale: pxScale.defaultValue,
  theme: theme.defaultValue,
  items: items,
};

Default.argTypes = {
  appearance,
  pxScale,
  theme,
  items,
};
