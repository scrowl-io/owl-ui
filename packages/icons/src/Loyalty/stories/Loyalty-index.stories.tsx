import * as React from 'react';
import { component as Icon } from '../index';
import { IconsLoyaltyProps } from '../Loyalty.types';

import { display } from './Loyalty-display.stories';
import { appearance } from './Loyalty-appearance.stories';
import { size } from './Loyalty-size.stories';
import { theme } from './Loyalty-theme.stories';

export const Loyalty = (args: IconsLoyaltyProps) => (
  <Icon {...args}></Icon>
);

Loyalty.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Loyalty.argTypes = {
  display,
  appearance,
  size,
  theme,
};
