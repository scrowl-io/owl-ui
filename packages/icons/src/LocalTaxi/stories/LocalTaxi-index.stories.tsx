import * as React from 'react';
import { component as Icon } from '../index';
import { IconsLocalTaxiProps } from '../LocalTaxi.types';

import { display } from './LocalTaxi-display.stories';
import { appearance } from './LocalTaxi-appearance.stories';
import { size } from './LocalTaxi-size.stories';
import { theme } from './LocalTaxi-theme.stories';

export const LocalTaxi = (args: IconsLocalTaxiProps) => (
  <Icon {...args}></Icon>
);

LocalTaxi.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

LocalTaxi.argTypes = {
  display,
  appearance,
  size,
  theme,
};
