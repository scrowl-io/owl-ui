import * as React from 'react';
import { component as Icon } from '../index';
import { IconsAirlineSeatReclineNormalProps } from '../AirlineSeatReclineNormal.types';

import { display } from './AirlineSeatReclineNormal-display.stories';
import { appearance } from './AirlineSeatReclineNormal-appearance.stories';
import { size } from './AirlineSeatReclineNormal-size.stories';
import { theme } from './AirlineSeatReclineNormal-theme.stories';

export const AirlineSeatReclineNormal = (args: IconsAirlineSeatReclineNormalProps) => (
  <Icon {...args}></Icon>
);

AirlineSeatReclineNormal.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

AirlineSeatReclineNormal.argTypes = {
  display,
  appearance,
  size,
  theme,
};
