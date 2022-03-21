import * as React from 'react';
import { component as Icon } from '../index';
import { IconsLooksTwoProps } from '../LooksTwo.types';

import { display } from './LooksTwo-display.stories';
import { appearance } from './LooksTwo-appearance.stories';
import { size } from './LooksTwo-size.stories';
import { theme } from './LooksTwo-theme.stories';

export const LooksTwo = (args: IconsLooksTwoProps) => (
  <Icon {...args}></Icon>
);

LooksTwo.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

LooksTwo.argTypes = {
  display,
  appearance,
  size,
  theme,
};
