import * as React from 'react';
import { component as Icon } from '../index';
import { IconsAirportShuttleProps } from '../AirportShuttle.types';

import { display } from './AirportShuttle-display.stories';
import { appearance } from './AirportShuttle-appearance.stories';
import { size } from './AirportShuttle-size.stories';
import { theme } from './AirportShuttle-theme.stories';

export const AirportShuttle = (args: IconsAirportShuttleProps) => (
  <Icon {...args}></Icon>
);

AirportShuttle.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

AirportShuttle.argTypes = {
  display,
  appearance,
  size,
  theme,
};
