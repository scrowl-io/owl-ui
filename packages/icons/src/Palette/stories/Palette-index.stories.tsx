import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPaletteProps } from '../Palette.types';

import { display } from './Palette-display.stories';
import { appearance } from './Palette-appearance.stories';
import { size } from './Palette-size.stories';
import { theme } from './Palette-theme.stories';

export const Palette = (args: IconsPaletteProps) => (
  <Icon {...args}></Icon>
);

Palette.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Palette.argTypes = {
  display,
  appearance,
  size,
  theme,
};
