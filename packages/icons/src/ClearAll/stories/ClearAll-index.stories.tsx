import * as React from 'react';
import { component as Icon } from '../index';
import { IconsClearAllProps } from '../ClearAll.types';

import { display } from './ClearAll-display.stories';
import { appearance } from './ClearAll-appearance.stories';
import { size } from './ClearAll-size.stories';
import { theme } from './ClearAll-theme.stories';

export const ClearAll = (args: IconsClearAllProps) => (
  <Icon {...args}></Icon>
);

ClearAll.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

ClearAll.argTypes = {
  display,
  appearance,
  size,
  theme,
};
