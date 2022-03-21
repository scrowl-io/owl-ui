import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPhoneLockedProps } from '../PhoneLocked.types';

import { display } from './PhoneLocked-display.stories';
import { appearance } from './PhoneLocked-appearance.stories';
import { size } from './PhoneLocked-size.stories';
import { theme } from './PhoneLocked-theme.stories';

export const PhoneLocked = (args: IconsPhoneLockedProps) => (
  <Icon {...args}></Icon>
);

PhoneLocked.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

PhoneLocked.argTypes = {
  display,
  appearance,
  size,
  theme,
};
