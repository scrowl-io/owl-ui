import * as React from 'react';
import { component as Icon } from '../index';
import { IconsStarHalfProps } from '../StarHalf.types';

import { display } from './StarHalf-display.stories';
import { appearance } from './StarHalf-appearance.stories';
import { size } from './StarHalf-size.stories';
import { theme } from './StarHalf-theme.stories';

export const StarHalf = (args: IconsStarHalfProps) => (
  <Icon {...args}></Icon>
);

StarHalf.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

StarHalf.argTypes = {
  display,
  appearance,
  size,
  theme,
};
