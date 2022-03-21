import * as React from 'react';
import { component as Icon } from '../index';
import { IconsAirlineSeatLegroomNormalProps } from '../AirlineSeatLegroomNormal.types';

import { display } from './AirlineSeatLegroomNormal-display.stories';
import { appearance } from './AirlineSeatLegroomNormal-appearance.stories';
import { size } from './AirlineSeatLegroomNormal-size.stories';
import { theme } from './AirlineSeatLegroomNormal-theme.stories';

export const AirlineSeatLegroomNormal = (args: IconsAirlineSeatLegroomNormalProps) => (
  <Icon {...args}></Icon>
);

AirlineSeatLegroomNormal.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

AirlineSeatLegroomNormal.argTypes = {
  display,
  appearance,
  size,
  theme,
};
