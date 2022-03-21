import * as React from 'react';
import { component as Icon } from '../index';
import { IconsColorLensProps } from '../ColorLens.types';

import { display } from './ColorLens-display.stories';
import { appearance } from './ColorLens-appearance.stories';
import { size } from './ColorLens-size.stories';
import { theme } from './ColorLens-theme.stories';

export const ColorLens = (args: IconsColorLensProps) => (
  <Icon {...args}></Icon>
);

ColorLens.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

ColorLens.argTypes = {
  display,
  appearance,
  size,
  theme,
};
