import * as React from 'react';
import { component as Icon } from '../index';
import { IconsBrightnessHighProps } from '../BrightnessHigh.types';

import { display } from './BrightnessHigh-display.stories';
import { appearance } from './BrightnessHigh-appearance.stories';
import { size } from './BrightnessHigh-size.stories';
import { theme } from './BrightnessHigh-theme.stories';

export const BrightnessHigh = (args: IconsBrightnessHighProps) => (
  <Icon {...args}></Icon>
);

BrightnessHigh.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

BrightnessHigh.argTypes = {
  display,
  appearance,
  size,
  theme,
};
