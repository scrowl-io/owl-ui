import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFlightProps } from '../Flight.types';

import { display } from './Flight-display.stories';
import { appearance } from './Flight-appearance.stories';
import { size } from './Flight-size.stories';
import { theme } from './Flight-theme.stories';

export const Flight = (args: IconsFlightProps) => (
  <Icon {...args}></Icon>
);

Flight.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Flight.argTypes = {
  display,
  appearance,
  size,
  theme,
};
