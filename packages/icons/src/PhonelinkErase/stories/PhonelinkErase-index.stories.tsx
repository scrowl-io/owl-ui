import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPhonelinkEraseProps } from '../PhonelinkErase.types';

import { display } from './PhonelinkErase-display.stories';
import { appearance } from './PhonelinkErase-appearance.stories';
import { size } from './PhonelinkErase-size.stories';
import { theme } from './PhonelinkErase-theme.stories';

export const PhonelinkErase = (args: IconsPhonelinkEraseProps) => (
  <Icon {...args}></Icon>
);

PhonelinkErase.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

PhonelinkErase.argTypes = {
  display,
  appearance,
  size,
  theme,
};
