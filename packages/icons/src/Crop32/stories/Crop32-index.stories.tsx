import * as React from 'react';
import { component as Icon } from '../index';
import { IconsCrop32Props } from '../Crop32.types';

import { display } from './Crop32-display.stories';
import { appearance } from './Crop32-appearance.stories';
import { size } from './Crop32-size.stories';
import { theme } from './Crop32-theme.stories';

export const Crop32 = (args: IconsCrop32Props) => (
  <Icon {...args}></Icon>
);

Crop32.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Crop32.argTypes = {
  display,
  appearance,
  size,
  theme,
};
