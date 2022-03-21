import * as React from 'react';
import { component as Icon } from '../index';
import { IconsAirplanemodeInactiveProps } from '../AirplanemodeInactive.types';

import { display } from './AirplanemodeInactive-display.stories';
import { appearance } from './AirplanemodeInactive-appearance.stories';
import { size } from './AirplanemodeInactive-size.stories';
import { theme } from './AirplanemodeInactive-theme.stories';

export const AirplanemodeInactive = (args: IconsAirplanemodeInactiveProps) => (
  <Icon {...args}></Icon>
);

AirplanemodeInactive.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

AirplanemodeInactive.argTypes = {
  display,
  appearance,
  size,
  theme,
};
