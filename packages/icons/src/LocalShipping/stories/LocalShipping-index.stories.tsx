import * as React from 'react';
import { component as Icon } from '../index';
import { IconsLocalShippingProps } from '../LocalShipping.types';

import { display } from './LocalShipping-display.stories';
import { appearance } from './LocalShipping-appearance.stories';
import { size } from './LocalShipping-size.stories';
import { theme } from './LocalShipping-theme.stories';

export const LocalShipping = (args: IconsLocalShippingProps) => (
  <Icon {...args}></Icon>
);

LocalShipping.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

LocalShipping.argTypes = {
  display,
  appearance,
  size,
  theme,
};
