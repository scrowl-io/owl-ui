import * as React from 'react';
import { component as Icon } from '../index';
import { IconsDirectionsRunProps } from '../DirectionsRun.types';

import { display } from './DirectionsRun-display.stories';
import { appearance } from './DirectionsRun-appearance.stories';
import { size } from './DirectionsRun-size.stories';
import { theme } from './DirectionsRun-theme.stories';

export const DirectionsRun = (args: IconsDirectionsRunProps) => (
  <Icon {...args}></Icon>
);

DirectionsRun.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

DirectionsRun.argTypes = {
  display,
  appearance,
  size,
  theme,
};
