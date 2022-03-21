import * as React from 'react';
import { component as Icon } from '../index';
import { IconsLocalBarProps } from '../LocalBar.types';

import { display } from './LocalBar-display.stories';
import { appearance } from './LocalBar-appearance.stories';
import { size } from './LocalBar-size.stories';
import { theme } from './LocalBar-theme.stories';

export const LocalBar = (args: IconsLocalBarProps) => (
  <Icon {...args}></Icon>
);

LocalBar.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

LocalBar.argTypes = {
  display,
  appearance,
  size,
  theme,
};
