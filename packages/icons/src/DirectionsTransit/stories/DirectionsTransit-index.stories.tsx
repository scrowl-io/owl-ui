import * as React from 'react';
import { component as Icon } from '../index';
import { IconsDirectionsTransitProps } from '../DirectionsTransit.types';

import { display } from './DirectionsTransit-display.stories';
import { appearance } from './DirectionsTransit-appearance.stories';
import { size } from './DirectionsTransit-size.stories';
import { theme } from './DirectionsTransit-theme.stories';

export const DirectionsTransit = (args: IconsDirectionsTransitProps) => (
  <Icon {...args}></Icon>
);

DirectionsTransit.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

DirectionsTransit.argTypes = {
  display,
  appearance,
  size,
  theme,
};
