import * as React from 'react';
import { component as Icon } from '../index';
import { IconsDirectionsSubwayProps } from '../DirectionsSubway.types';

import { display } from './DirectionsSubway-display.stories';
import { appearance } from './DirectionsSubway-appearance.stories';
import { size } from './DirectionsSubway-size.stories';
import { theme } from './DirectionsSubway-theme.stories';

export const DirectionsSubway = (args: IconsDirectionsSubwayProps) => (
  <Icon {...args}></Icon>
);

DirectionsSubway.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

DirectionsSubway.argTypes = {
  display,
  appearance,
  size,
  theme,
};
