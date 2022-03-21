import * as React from 'react';
import { component as Icon } from '../index';
import { IconsDirectionsWalkProps } from '../DirectionsWalk.types';

import { display } from './DirectionsWalk-display.stories';
import { appearance } from './DirectionsWalk-appearance.stories';
import { size } from './DirectionsWalk-size.stories';
import { theme } from './DirectionsWalk-theme.stories';

export const DirectionsWalk = (args: IconsDirectionsWalkProps) => (
  <Icon {...args}></Icon>
);

DirectionsWalk.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

DirectionsWalk.argTypes = {
  display,
  appearance,
  size,
  theme,
};
