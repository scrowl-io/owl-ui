import * as React from 'react';
import { component as Icon } from '../index';
import { IconsStraightenProps } from '../Straighten.types';

import { display } from './Straighten-display.stories';
import { appearance } from './Straighten-appearance.stories';
import { size } from './Straighten-size.stories';
import { theme } from './Straighten-theme.stories';

export const Straighten = (args: IconsStraightenProps) => (
  <Icon {...args}></Icon>
);

Straighten.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Straighten.argTypes = {
  display,
  appearance,
  size,
  theme,
};
