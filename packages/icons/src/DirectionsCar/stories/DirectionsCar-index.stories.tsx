import * as React from 'react';
import { component as Icon } from '../index';
import { IconsDirectionsCarProps } from '../DirectionsCar.types';

import { display } from './DirectionsCar-display.stories';
import { appearance } from './DirectionsCar-appearance.stories';
import { size } from './DirectionsCar-size.stories';
import { theme } from './DirectionsCar-theme.stories';

export const DirectionsCar = (args: IconsDirectionsCarProps) => (
  <Icon {...args}></Icon>
);

DirectionsCar.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

DirectionsCar.argTypes = {
  display,
  appearance,
  size,
  theme,
};
