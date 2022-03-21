import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPhonelinkLockProps } from '../PhonelinkLock.types';

import { display } from './PhonelinkLock-display.stories';
import { appearance } from './PhonelinkLock-appearance.stories';
import { size } from './PhonelinkLock-size.stories';
import { theme } from './PhonelinkLock-theme.stories';

export const PhonelinkLock = (args: IconsPhonelinkLockProps) => (
  <Icon {...args}></Icon>
);

PhonelinkLock.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

PhonelinkLock.argTypes = {
  display,
  appearance,
  size,
  theme,
};
