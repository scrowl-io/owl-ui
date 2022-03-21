import * as React from 'react';
import { component as Icon } from '../index';
import { IconsViewQuiltProps } from '../ViewQuilt.types';

import { display } from './ViewQuilt-display.stories';
import { appearance } from './ViewQuilt-appearance.stories';
import { size } from './ViewQuilt-size.stories';
import { theme } from './ViewQuilt-theme.stories';

export const ViewQuilt = (args: IconsViewQuiltProps) => (
  <Icon {...args}></Icon>
);

ViewQuilt.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

ViewQuilt.argTypes = {
  display,
  appearance,
  size,
  theme,
};
