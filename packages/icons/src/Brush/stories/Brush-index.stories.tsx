import * as React from 'react';
import { component as Icon } from '../index';
import { IconsBrushProps } from '../Brush.types';

import { display } from './Brush-display.stories';
import { appearance } from './Brush-appearance.stories';
import { size } from './Brush-size.stories';
import { theme } from './Brush-theme.stories';

export const Brush = (args: IconsBrushProps) => (
  <Icon {...args}></Icon>
);

Brush.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Brush.argTypes = {
  display,
  appearance,
  size,
  theme,
};
