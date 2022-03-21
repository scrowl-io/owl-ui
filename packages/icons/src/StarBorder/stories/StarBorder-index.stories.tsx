import * as React from 'react';
import { component as Icon } from '../index';
import { IconsStarBorderProps } from '../StarBorder.types';

import { display } from './StarBorder-display.stories';
import { appearance } from './StarBorder-appearance.stories';
import { size } from './StarBorder-size.stories';
import { theme } from './StarBorder-theme.stories';

export const StarBorder = (args: IconsStarBorderProps) => (
  <Icon {...args}></Icon>
);

StarBorder.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

StarBorder.argTypes = {
  display,
  appearance,
  size,
  theme,
};
