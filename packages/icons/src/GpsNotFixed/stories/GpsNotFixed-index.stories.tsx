import * as React from 'react';
import { component as Icon } from '../index';
import { IconsGpsNotFixedProps } from '../GpsNotFixed.types';

import { display } from './GpsNotFixed-display.stories';
import { appearance } from './GpsNotFixed-appearance.stories';
import { size } from './GpsNotFixed-size.stories';
import { theme } from './GpsNotFixed-theme.stories';

export const GpsNotFixed = (args: IconsGpsNotFixedProps) => (
  <Icon {...args}></Icon>
);

GpsNotFixed.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

GpsNotFixed.argTypes = {
  display,
  appearance,
  size,
  theme,
};
