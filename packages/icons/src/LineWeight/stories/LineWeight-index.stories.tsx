import * as React from 'react';
import { component as Icon } from '../index';
import { IconsLineWeightProps } from '../LineWeight.types';

import { display } from './LineWeight-display.stories';
import { appearance } from './LineWeight-appearance.stories';
import { size } from './LineWeight-size.stories';
import { theme } from './LineWeight-theme.stories';

export const LineWeight = (args: IconsLineWeightProps) => (
  <Icon {...args}></Icon>
);

LineWeight.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

LineWeight.argTypes = {
  display,
  appearance,
  size,
  theme,
};
