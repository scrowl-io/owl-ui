import * as React from 'react';
import { component as Icon } from '../index';
import { IconsDirectionsBoatProps } from '../DirectionsBoat.types';

import { display } from './DirectionsBoat-display.stories';
import { appearance } from './DirectionsBoat-appearance.stories';
import { size } from './DirectionsBoat-size.stories';
import { theme } from './DirectionsBoat-theme.stories';

export const DirectionsBoat = (args: IconsDirectionsBoatProps) => (
  <Icon {...args}></Icon>
);

DirectionsBoat.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

DirectionsBoat.argTypes = {
  display,
  appearance,
  size,
  theme,
};
