import * as React from 'react';
import { component as Icon } from '../index';
import { IconsViewListProps } from '../ViewList.types';

import { display } from './ViewList-display.stories';
import { appearance } from './ViewList-appearance.stories';
import { size } from './ViewList-size.stories';
import { theme } from './ViewList-theme.stories';

export const ViewList = (args: IconsViewListProps) => (
  <Icon {...args}></Icon>
);

ViewList.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

ViewList.argTypes = {
  display,
  appearance,
  size,
  theme,
};
