import * as React from 'react';
import { component as Icon } from '../index';
import { IconsAirlineSeatLegroomExtraProps } from '../AirlineSeatLegroomExtra.types';

import { display } from './AirlineSeatLegroomExtra-display.stories';
import { appearance } from './AirlineSeatLegroomExtra-appearance.stories';
import { size } from './AirlineSeatLegroomExtra-size.stories';
import { theme } from './AirlineSeatLegroomExtra-theme.stories';

export const AirlineSeatLegroomExtra = (args: IconsAirlineSeatLegroomExtraProps) => (
  <Icon {...args}></Icon>
);

AirlineSeatLegroomExtra.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

AirlineSeatLegroomExtra.argTypes = {
  display,
  appearance,
  size,
  theme,
};
