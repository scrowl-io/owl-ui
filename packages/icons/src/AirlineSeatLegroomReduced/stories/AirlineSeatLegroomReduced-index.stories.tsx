import * as React from 'react';
import { component as Icon } from '../index';
import { IconsAirlineSeatLegroomReducedProps } from '../AirlineSeatLegroomReduced.types';

import { display } from './AirlineSeatLegroomReduced-display.stories';
import { appearance } from './AirlineSeatLegroomReduced-appearance.stories';
import { size } from './AirlineSeatLegroomReduced-size.stories';
import { theme } from './AirlineSeatLegroomReduced-theme.stories';

export const AirlineSeatLegroomReduced = (args: IconsAirlineSeatLegroomReducedProps) => (
  <Icon {...args}></Icon>
);

AirlineSeatLegroomReduced.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

AirlineSeatLegroomReduced.argTypes = {
  display,
  appearance,
  size,
  theme,
};
