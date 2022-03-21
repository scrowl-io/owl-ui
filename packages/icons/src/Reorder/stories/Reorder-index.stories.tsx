import * as React from 'react';
import { component as Icon } from '../index';
import { IconsReorderProps } from '../Reorder.types';

import { display } from './Reorder-display.stories';
import { appearance } from './Reorder-appearance.stories';
import { size } from './Reorder-size.stories';
import { theme } from './Reorder-theme.stories';

export const Reorder = (args: IconsReorderProps) => (
  <Icon {...args}></Icon>
);

Reorder.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Reorder.argTypes = {
  display,
  appearance,
  size,
  theme,
};
