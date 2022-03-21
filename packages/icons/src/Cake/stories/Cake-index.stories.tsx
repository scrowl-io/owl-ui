import * as React from 'react';
import { component as Icon } from '../index';
import { IconsCakeProps } from '../Cake.types';

import { display } from './Cake-display.stories';
import { appearance } from './Cake-appearance.stories';
import { size } from './Cake-size.stories';
import { theme } from './Cake-theme.stories';

export const Cake = (args: IconsCakeProps) => (
  <Icon {...args}></Icon>
);

Cake.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Cake.argTypes = {
  display,
  appearance,
  size,
  theme,
};
