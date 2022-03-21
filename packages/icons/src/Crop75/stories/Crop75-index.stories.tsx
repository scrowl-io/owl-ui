import * as React from 'react';
import { component as Icon } from '../index';
import { IconsCrop75Props } from '../Crop75.types';

import { display } from './Crop75-display.stories';
import { appearance } from './Crop75-appearance.stories';
import { size } from './Crop75-size.stories';
import { theme } from './Crop75-theme.stories';

export const Crop75 = (args: IconsCrop75Props) => (
  <Icon {...args}></Icon>
);

Crop75.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Crop75.argTypes = {
  display,
  appearance,
  size,
  theme,
};
