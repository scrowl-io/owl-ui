import * as React from 'react';
import { component as Icon } from '../index';
import { IconsCrop54Props } from '../Crop54.types';

import { display } from './Crop54-display.stories';
import { appearance } from './Crop54-appearance.stories';
import { size } from './Crop54-size.stories';
import { theme } from './Crop54-theme.stories';

export const Crop54 = (args: IconsCrop54Props) => (
  <Icon {...args}></Icon>
);

Crop54.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Crop54.argTypes = {
  display,
  appearance,
  size,
  theme,
};
