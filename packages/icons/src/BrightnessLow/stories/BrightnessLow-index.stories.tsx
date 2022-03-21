import * as React from 'react';
import { component as Icon } from '../index';
import { IconsBrightnessLowProps } from '../BrightnessLow.types';

import { display } from './BrightnessLow-display.stories';
import { appearance } from './BrightnessLow-appearance.stories';
import { size } from './BrightnessLow-size.stories';
import { theme } from './BrightnessLow-theme.stories';

export const BrightnessLow = (args: IconsBrightnessLowProps) => (
  <Icon {...args}></Icon>
);

BrightnessLow.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

BrightnessLow.argTypes = {
  display,
  appearance,
  size,
  theme,
};
