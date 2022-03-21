import * as React from 'react';
import { component as Icon } from '../index';
import { IconsStarsProps } from '../Stars.types';

import { display } from './Stars-display.stories';
import { appearance } from './Stars-appearance.stories';
import { size } from './Stars-size.stories';
import { theme } from './Stars-theme.stories';

export const Stars = (args: IconsStarsProps) => (
  <Icon {...args}></Icon>
);

Stars.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Stars.argTypes = {
  display,
  appearance,
  size,
  theme,
};
