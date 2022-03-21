import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPhoneMissedProps } from '../PhoneMissed.types';

import { display } from './PhoneMissed-display.stories';
import { appearance } from './PhoneMissed-appearance.stories';
import { size } from './PhoneMissed-size.stories';
import { theme } from './PhoneMissed-theme.stories';

export const PhoneMissed = (args: IconsPhoneMissedProps) => (
  <Icon {...args}></Icon>
);

PhoneMissed.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

PhoneMissed.argTypes = {
  display,
  appearance,
  size,
  theme,
};
