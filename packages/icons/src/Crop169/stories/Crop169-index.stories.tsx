import * as React from 'react';
import { component as Icon } from '../index';
import { IconsCrop169Props } from '../Crop169.types';

import { display } from './Crop169-display.stories';
import { appearance } from './Crop169-appearance.stories';
import { size } from './Crop169-size.stories';
import { theme } from './Crop169-theme.stories';

export const Crop169 = (args: IconsCrop169Props) => (
  <Icon {...args}></Icon>
);

Crop169.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Crop169.argTypes = {
  display,
  appearance,
  size,
  theme,
};
