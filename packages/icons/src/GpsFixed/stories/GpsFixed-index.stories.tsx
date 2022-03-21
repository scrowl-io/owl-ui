import * as React from 'react';
import { component as Icon } from '../index';
import { IconsGpsFixedProps } from '../GpsFixed.types';

import { display } from './GpsFixed-display.stories';
import { appearance } from './GpsFixed-appearance.stories';
import { size } from './GpsFixed-size.stories';
import { theme } from './GpsFixed-theme.stories';

export const GpsFixed = (args: IconsGpsFixedProps) => (
  <Icon {...args}></Icon>
);

GpsFixed.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

GpsFixed.argTypes = {
  display,
  appearance,
  size,
  theme,
};
