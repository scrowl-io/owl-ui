import * as React from 'react';
import { component as Icon } from '../index';
import { IconsForumProps } from '../Forum.types';

import { display } from './Forum-display.stories';
import { appearance } from './Forum-appearance.stories';
import { size } from './Forum-size.stories';
import { theme } from './Forum-theme.stories';

export const Forum = (args: IconsForumProps) => (
  <Icon {...args}></Icon>
);

Forum.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Forum.argTypes = {
  display,
  appearance,
  size,
  theme,
};
