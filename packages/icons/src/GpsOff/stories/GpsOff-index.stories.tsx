import * as React from 'react';
import { component as Icon } from '../index';
import { IconsGpsOffProps } from '../GpsOff.types';

import { display } from './GpsOff-display.stories';
import { appearance } from './GpsOff-appearance.stories';
import { size } from './GpsOff-size.stories';
import { theme } from './GpsOff-theme.stories';

export const GpsOff = (args: IconsGpsOffProps) => (
  <Icon {...args}></Icon>
);

GpsOff.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

GpsOff.argTypes = {
  display,
  appearance,
  size,
  theme,
};
