import * as React from 'react';
import { component as Icon } from '../index';
import { IconsMenuProps } from '../Menu.types';

import { display } from './Menu-display.stories';
import { appearance } from './Menu-appearance.stories';
import { size } from './Menu-size.stories';
import { theme } from './Menu-theme.stories';

export const Menu = (args: IconsMenuProps) => (
  <Icon {...args}></Icon>
);

Menu.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Menu.argTypes = {
  display,
  appearance,
  size,
  theme,
};
