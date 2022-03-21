import * as React from 'react';
import { component as Icon } from '../index';
import { IconsLocalGasStationProps } from '../LocalGasStation.types';

import { display } from './LocalGasStation-display.stories';
import { appearance } from './LocalGasStation-appearance.stories';
import { size } from './LocalGasStation-size.stories';
import { theme } from './LocalGasStation-theme.stories';

export const LocalGasStation = (args: IconsLocalGasStationProps) => (
  <Icon {...args}></Icon>
);

LocalGasStation.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

LocalGasStation.argTypes = {
  display,
  appearance,
  size,
  theme,
};
