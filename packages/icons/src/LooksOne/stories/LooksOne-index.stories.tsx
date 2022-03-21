import * as React from 'react';
import { component as Icon } from '../index';
import { IconsLooksOneProps } from '../LooksOne.types';

import { display } from './LooksOne-display.stories';
import { appearance } from './LooksOne-appearance.stories';
import { size } from './LooksOne-size.stories';
import { theme } from './LooksOne-theme.stories';

export const LooksOne = (args: IconsLooksOneProps) => (
  <Icon {...args}></Icon>
);

LooksOne.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

LooksOne.argTypes = {
  display,
  appearance,
  size,
  theme,
};
