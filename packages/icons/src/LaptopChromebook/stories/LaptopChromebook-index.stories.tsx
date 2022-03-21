import * as React from 'react';
import { component as Icon } from '../index';
import { IconsLaptopChromebookProps } from '../LaptopChromebook.types';

import { display } from './LaptopChromebook-display.stories';
import { appearance } from './LaptopChromebook-appearance.stories';
import { size } from './LaptopChromebook-size.stories';
import { theme } from './LaptopChromebook-theme.stories';

export const LaptopChromebook = (args: IconsLaptopChromebookProps) => (
  <Icon {...args}></Icon>
);

LaptopChromebook.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

LaptopChromebook.argTypes = {
  display,
  appearance,
  size,
  theme,
};
