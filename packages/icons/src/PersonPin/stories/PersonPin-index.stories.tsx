import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPersonPinProps } from '../PersonPin.types';

import { display } from './PersonPin-display.stories';
import { appearance } from './PersonPin-appearance.stories';
import { size } from './PersonPin-size.stories';
import { theme } from './PersonPin-theme.stories';

export const PersonPin = (args: IconsPersonPinProps) => (
  <Icon {...args}></Icon>
);

PersonPin.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

PersonPin.argTypes = {
  display,
  appearance,
  size,
  theme,
};
