import * as React from 'react';
import { component as Icon } from '../index';
import { IconsSpaceBarProps } from '../SpaceBar.types';

import { display } from './SpaceBar-display.stories';
import { appearance } from './SpaceBar-appearance.stories';
import { size } from './SpaceBar-size.stories';
import { theme } from './SpaceBar-theme.stories';

export const SpaceBar = (args: IconsSpaceBarProps) => (
  <Icon {...args}></Icon>
);

SpaceBar.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

SpaceBar.argTypes = {
  display,
  appearance,
  size,
  theme,
};
