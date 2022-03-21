import * as React from 'react';
import { component as Icon } from '../index';
import { IconsAirplanemodeActiveProps } from '../AirplanemodeActive.types';

import { display } from './AirplanemodeActive-display.stories';
import { appearance } from './AirplanemodeActive-appearance.stories';
import { size } from './AirplanemodeActive-size.stories';
import { theme } from './AirplanemodeActive-theme.stories';

export const AirplanemodeActive = (args: IconsAirplanemodeActiveProps) => (
  <Icon {...args}></Icon>
);

AirplanemodeActive.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

AirplanemodeActive.argTypes = {
  display,
  appearance,
  size,
  theme,
};
