import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPhonelinkRingProps } from '../PhonelinkRing.types';

import { display } from './PhonelinkRing-display.stories';
import { appearance } from './PhonelinkRing-appearance.stories';
import { size } from './PhonelinkRing-size.stories';
import { theme } from './PhonelinkRing-theme.stories';

export const PhonelinkRing = (args: IconsPhonelinkRingProps) => (
  <Icon {...args}></Icon>
);

PhonelinkRing.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

PhonelinkRing.argTypes = {
  display,
  appearance,
  size,
  theme,
};
