import * as React from 'react';
import { component as Icon } from '../index';
import { IconsBrightnessAutoProps } from '../BrightnessAuto.types';

import { display } from './BrightnessAuto-display.stories';
import { appearance } from './BrightnessAuto-appearance.stories';
import { size } from './BrightnessAuto-size.stories';
import { theme } from './BrightnessAuto-theme.stories';

export const BrightnessAuto = (args: IconsBrightnessAutoProps) => (
  <Icon {...args}></Icon>
);

BrightnessAuto.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

BrightnessAuto.argTypes = {
  display,
  appearance,
  size,
  theme,
};
