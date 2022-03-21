import * as React from 'react';
import { component as Icon } from '../index';
import { IconsSatelliteProps } from '../Satellite.types';

import { display } from './Satellite-display.stories';
import { appearance } from './Satellite-appearance.stories';
import { size } from './Satellite-size.stories';
import { theme } from './Satellite-theme.stories';

export const Satellite = (args: IconsSatelliteProps) => (
  <Icon {...args}></Icon>
);

Satellite.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Satellite.argTypes = {
  display,
  appearance,
  size,
  theme,
};
