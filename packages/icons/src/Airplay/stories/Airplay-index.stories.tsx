import * as React from 'react';
import { component as Icon } from '../index';
import { IconsAirplayProps } from '../Airplay.types';

import { display } from './Airplay-display.stories';
import { appearance } from './Airplay-appearance.stories';
import { size } from './Airplay-size.stories';
import { theme } from './Airplay-theme.stories';

export const Airplay = (args: IconsAirplayProps) => (
  <Icon {...args}></Icon>
);

Airplay.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Airplay.argTypes = {
  display,
  appearance,
  size,
  theme,
};
