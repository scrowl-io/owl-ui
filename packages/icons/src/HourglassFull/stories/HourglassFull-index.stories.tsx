import * as React from 'react';
import { component as Icon } from '../index';
import { IconsHourglassFullProps } from '../HourglassFull.types';

import { display } from './HourglassFull-display.stories';
import { appearance } from './HourglassFull-appearance.stories';
import { size } from './HourglassFull-size.stories';
import { theme } from './HourglassFull-theme.stories';

export const HourglassFull = (args: IconsHourglassFullProps) => (
  <Icon {...args}></Icon>
);

HourglassFull.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

HourglassFull.argTypes = {
  display,
  appearance,
  size,
  theme,
};
