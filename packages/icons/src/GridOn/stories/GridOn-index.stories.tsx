import * as React from 'react';
import { component as Icon } from '../index';
import { IconsGridOnProps } from '../GridOn.types';

import { display } from './GridOn-display.stories';
import { appearance } from './GridOn-appearance.stories';
import { size } from './GridOn-size.stories';
import { theme } from './GridOn-theme.stories';

export const GridOn = (args: IconsGridOnProps) => (
  <Icon {...args}></Icon>
);

GridOn.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

GridOn.argTypes = {
  display,
  appearance,
  size,
  theme,
};
