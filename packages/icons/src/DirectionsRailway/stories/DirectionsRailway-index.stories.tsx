import * as React from 'react';
import { component as Icon } from '../index';
import { IconsDirectionsRailwayProps } from '../DirectionsRailway.types';

import { display } from './DirectionsRailway-display.stories';
import { appearance } from './DirectionsRailway-appearance.stories';
import { size } from './DirectionsRailway-size.stories';
import { theme } from './DirectionsRailway-theme.stories';

export const DirectionsRailway = (args: IconsDirectionsRailwayProps) => (
  <Icon {...args}></Icon>
);

DirectionsRailway.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

DirectionsRailway.argTypes = {
  display,
  appearance,
  size,
  theme,
};
