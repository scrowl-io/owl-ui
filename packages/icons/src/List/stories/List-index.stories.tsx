import * as React from 'react';
import { component as Icon } from '../index';
import { IconsListProps } from '../List.types';

import { display } from './List-display.stories';
import { appearance } from './List-appearance.stories';
import { size } from './List-size.stories';
import { theme } from './List-theme.stories';

export const List = (args: IconsListProps) => (
  <Icon {...args}></Icon>
);

List.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

List.argTypes = {
  display,
  appearance,
  size,
  theme,
};
