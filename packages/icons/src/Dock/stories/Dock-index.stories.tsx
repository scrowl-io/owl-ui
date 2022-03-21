import * as React from 'react';
import { component as Icon } from '../index';
import { IconsDockProps } from '../Dock.types';

import { display } from './Dock-display.stories';
import { appearance } from './Dock-appearance.stories';
import { size } from './Dock-size.stories';
import { theme } from './Dock-theme.stories';

export const Dock = (args: IconsDockProps) => (
  <Icon {...args}></Icon>
);

Dock.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Dock.argTypes = {
  display,
  appearance,
  size,
  theme,
};
