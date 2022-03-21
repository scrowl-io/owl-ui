import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFreeBreakfastProps } from '../FreeBreakfast.types';

import { display } from './FreeBreakfast-display.stories';
import { appearance } from './FreeBreakfast-appearance.stories';
import { size } from './FreeBreakfast-size.stories';
import { theme } from './FreeBreakfast-theme.stories';

export const FreeBreakfast = (args: IconsFreeBreakfastProps) => (
  <Icon {...args}></Icon>
);

FreeBreakfast.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

FreeBreakfast.argTypes = {
  display,
  appearance,
  size,
  theme,
};
