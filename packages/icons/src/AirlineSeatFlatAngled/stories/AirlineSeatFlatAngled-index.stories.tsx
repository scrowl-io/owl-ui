import * as React from 'react';
import { component as Icon } from '../index';
import { IconsAirlineSeatFlatAngledProps } from '../AirlineSeatFlatAngled.types';

import { display } from './AirlineSeatFlatAngled-display.stories';
import { appearance } from './AirlineSeatFlatAngled-appearance.stories';
import { size } from './AirlineSeatFlatAngled-size.stories';
import { theme } from './AirlineSeatFlatAngled-theme.stories';

export const AirlineSeatFlatAngled = (args: IconsAirlineSeatFlatAngledProps) => (
  <Icon {...args}></Icon>
);

AirlineSeatFlatAngled.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

AirlineSeatFlatAngled.argTypes = {
  display,
  appearance,
  size,
  theme,
};
