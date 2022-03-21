import * as React from 'react';
import { component as Icon } from '../index';
import { IconsNavigationProps } from '../Navigation.types';

import { display } from './Navigation-display.stories';
import { appearance } from './Navigation-appearance.stories';
import { size } from './Navigation-size.stories';
import { theme } from './Navigation-theme.stories';

export const Navigation = (args: IconsNavigationProps) => (
  <Icon {...args}></Icon>
);

Navigation.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Navigation.argTypes = {
  display,
  appearance,
  size,
  theme,
};
