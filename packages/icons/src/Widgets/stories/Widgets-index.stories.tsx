import * as React from 'react';
import { component as Icon } from '../index';
import { IconsWidgetsProps } from '../Widgets.types';

import { display } from './Widgets-display.stories';
import { appearance } from './Widgets-appearance.stories';
import { size } from './Widgets-size.stories';
import { theme } from './Widgets-theme.stories';

export const Widgets = (args: IconsWidgetsProps) => (
  <Icon {...args}></Icon>
);

Widgets.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Widgets.argTypes = {
  display,
  appearance,
  size,
  theme,
};
