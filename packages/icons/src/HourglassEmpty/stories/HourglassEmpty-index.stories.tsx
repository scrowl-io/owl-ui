import * as React from 'react';
import { component as Icon } from '../index';
import { IconsHourglassEmptyProps } from '../HourglassEmpty.types';

import { display } from './HourglassEmpty-display.stories';
import { appearance } from './HourglassEmpty-appearance.stories';
import { size } from './HourglassEmpty-size.stories';
import { theme } from './HourglassEmpty-theme.stories';

export const HourglassEmpty = (args: IconsHourglassEmptyProps) => (
  <Icon {...args}></Icon>
);

HourglassEmpty.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

HourglassEmpty.argTypes = {
  display,
  appearance,
  size,
  theme,
};
