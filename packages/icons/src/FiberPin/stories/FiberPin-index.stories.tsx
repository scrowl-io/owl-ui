import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFiberPinProps } from '../FiberPin.types';

import { display } from './FiberPin-display.stories';
import { appearance } from './FiberPin-appearance.stories';
import { size } from './FiberPin-size.stories';
import { theme } from './FiberPin-theme.stories';

export const FiberPin = (args: IconsFiberPinProps) => (
  <Icon {...args}></Icon>
);

FiberPin.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

FiberPin.argTypes = {
  display,
  appearance,
  size,
  theme,
};
