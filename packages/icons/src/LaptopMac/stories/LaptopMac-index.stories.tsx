import * as React from 'react';
import { component as Icon } from '../index';
import { IconsLaptopMacProps } from '../LaptopMac.types';

import { display } from './LaptopMac-display.stories';
import { appearance } from './LaptopMac-appearance.stories';
import { size } from './LaptopMac-size.stories';
import { theme } from './LaptopMac-theme.stories';

export const LaptopMac = (args: IconsLaptopMacProps) => (
  <Icon {...args}></Icon>
);

LaptopMac.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

LaptopMac.argTypes = {
  display,
  appearance,
  size,
  theme,
};
