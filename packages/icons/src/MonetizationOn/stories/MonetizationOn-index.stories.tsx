import * as React from 'react';
import { component as Icon } from '../index';
import { IconsMonetizationOnProps } from '../MonetizationOn.types';

import { display } from './MonetizationOn-display.stories';
import { appearance } from './MonetizationOn-appearance.stories';
import { size } from './MonetizationOn-size.stories';
import { theme } from './MonetizationOn-theme.stories';

export const MonetizationOn = (args: IconsMonetizationOnProps) => (
  <Icon {...args}></Icon>
);

MonetizationOn.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

MonetizationOn.argTypes = {
  display,
  appearance,
  size,
  theme,
};
