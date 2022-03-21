import * as React from 'react';
import { component as Icon } from '../index';
import { IconsOpacityProps } from '../Opacity.types';

import { display } from './Opacity-display.stories';
import { appearance } from './Opacity-appearance.stories';
import { size } from './Opacity-size.stories';
import { theme } from './Opacity-theme.stories';

export const Opacity = (args: IconsOpacityProps) => (
  <Icon {...args}></Icon>
);

Opacity.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Opacity.argTypes = {
  display,
  appearance,
  size,
  theme,
};
