import * as React from 'react';
import { component as Icon } from '../index';
import { IconsEvStationProps } from '../EvStation.types';

import { display } from './EvStation-display.stories';
import { appearance } from './EvStation-appearance.stories';
import { size } from './EvStation-size.stories';
import { theme } from './EvStation-theme.stories';

export const EvStation = (args: IconsEvStationProps) => (
  <Icon {...args}></Icon>
);

EvStation.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

EvStation.argTypes = {
  display,
  appearance,
  size,
  theme,
};
