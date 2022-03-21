import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPhonelinkSetupProps } from '../PhonelinkSetup.types';

import { display } from './PhonelinkSetup-display.stories';
import { appearance } from './PhonelinkSetup-appearance.stories';
import { size } from './PhonelinkSetup-size.stories';
import { theme } from './PhonelinkSetup-theme.stories';

export const PhonelinkSetup = (args: IconsPhonelinkSetupProps) => (
  <Icon {...args}></Icon>
);

PhonelinkSetup.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

PhonelinkSetup.argTypes = {
  display,
  appearance,
  size,
  theme,
};
