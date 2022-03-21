import * as React from 'react';
import { component as Icon } from '../index';
import { IconsGroupProps } from '../Group.types';

import { display } from './Group-display.stories';
import { appearance } from './Group-appearance.stories';
import { size } from './Group-size.stories';
import { theme } from './Group-theme.stories';

export const Group = (args: IconsGroupProps) => (
  <Icon {...args}></Icon>
);

Group.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Group.argTypes = {
  display,
  appearance,
  size,
  theme,
};
