import * as React from 'react';
import { component as Icon } from '../index';
import { IconsLocalAirportProps } from '../LocalAirport.types';

import { display } from './LocalAirport-display.stories';
import { appearance } from './LocalAirport-appearance.stories';
import { size } from './LocalAirport-size.stories';
import { theme } from './LocalAirport-theme.stories';

export const LocalAirport = (args: IconsLocalAirportProps) => (
  <Icon {...args}></Icon>
);

LocalAirport.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

LocalAirport.argTypes = {
  display,
  appearance,
  size,
  theme,
};
