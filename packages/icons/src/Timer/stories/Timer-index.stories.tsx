import * as React from 'react';
import { component as Icon } from '../index';
import { IconsTimerProps } from '../Timer.types';

import { display } from './Timer-display.stories';
import { appearance } from './Timer-appearance.stories';
import { size } from './Timer-size.stories';
import { theme } from './Timer-theme.stories';

export const Timer = (args: IconsTimerProps) => (
  <Icon {...args}></Icon>
);

Timer.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Timer.argTypes = {
  display,
  appearance,
  size,
  theme,
};
