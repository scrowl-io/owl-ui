import * as React from 'react';
import { component as Icon } from '../index';
import { IconsGradientProps } from '../Gradient.types';

import { display } from './Gradient-display.stories';
import { appearance } from './Gradient-appearance.stories';
import { size } from './Gradient-size.stories';
import { theme } from './Gradient-theme.stories';

export const Gradient = (args: IconsGradientProps) => (
  <Icon {...args}></Icon>
);

Gradient.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Gradient.argTypes = {
  display,
  appearance,
  size,
  theme,
};
