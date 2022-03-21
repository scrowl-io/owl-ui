import * as React from 'react';
import { component as Icon } from '../index';
import { IconsDirectionsProps } from '../Directions.types';

import { display } from './Directions-display.stories';
import { appearance } from './Directions-appearance.stories';
import { size } from './Directions-size.stories';
import { theme } from './Directions-theme.stories';

export const Directions = (args: IconsDirectionsProps) => (
  <Icon {...args}></Icon>
);

Directions.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Directions.argTypes = {
  display,
  appearance,
  size,
  theme,
};
