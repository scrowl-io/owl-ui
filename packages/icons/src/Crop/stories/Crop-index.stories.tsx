import * as React from 'react';
import { component as Icon } from '../index';
import { IconsCropProps } from '../Crop.types';

import { display } from './Crop-display.stories';
import { appearance } from './Crop-appearance.stories';
import { size } from './Crop-size.stories';
import { theme } from './Crop-theme.stories';

export const Crop = (args: IconsCropProps) => (
  <Icon {...args}></Icon>
);

Crop.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Crop.argTypes = {
  display,
  appearance,
  size,
  theme,
};
