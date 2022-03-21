import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPhonelinkOffProps } from '../PhonelinkOff.types';

import { display } from './PhonelinkOff-display.stories';
import { appearance } from './PhonelinkOff-appearance.stories';
import { size } from './PhonelinkOff-size.stories';
import { theme } from './PhonelinkOff-theme.stories';

export const PhonelinkOff = (args: IconsPhonelinkOffProps) => (
  <Icon {...args}></Icon>
);

PhonelinkOff.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

PhonelinkOff.argTypes = {
  display,
  appearance,
  size,
  theme,
};
