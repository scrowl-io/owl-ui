import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPhonePausedProps } from '../PhonePaused.types';

import { display } from './PhonePaused-display.stories';
import { appearance } from './PhonePaused-appearance.stories';
import { size } from './PhonePaused-size.stories';
import { theme } from './PhonePaused-theme.stories';

export const PhonePaused = (args: IconsPhonePausedProps) => (
  <Icon {...args}></Icon>
);

PhonePaused.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

PhonePaused.argTypes = {
  display,
  appearance,
  size,
  theme,
};
