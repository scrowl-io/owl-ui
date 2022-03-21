import * as React from 'react';
import { component as Icon } from '../index';
import { IconsLaptopWindowsProps } from '../LaptopWindows.types';

import { display } from './LaptopWindows-display.stories';
import { appearance } from './LaptopWindows-appearance.stories';
import { size } from './LaptopWindows-size.stories';
import { theme } from './LaptopWindows-theme.stories';

export const LaptopWindows = (args: IconsLaptopWindowsProps) => (
  <Icon {...args}></Icon>
);

LaptopWindows.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

LaptopWindows.argTypes = {
  display,
  appearance,
  size,
  theme,
};
