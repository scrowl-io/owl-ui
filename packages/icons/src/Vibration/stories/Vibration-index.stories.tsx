import * as React from 'react';
import { component as Icon } from '../index';
import { IconsVibrationProps } from '../Vibration.types';

import { display } from './Vibration-display.stories';
import { appearance } from './Vibration-appearance.stories';
import { size } from './Vibration-size.stories';
import { theme } from './Vibration-theme.stories';

export const Vibration = (args: IconsVibrationProps) => (
  <Icon {...args}></Icon>
);

Vibration.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Vibration.argTypes = {
  display,
  appearance,
  size,
  theme,
};
