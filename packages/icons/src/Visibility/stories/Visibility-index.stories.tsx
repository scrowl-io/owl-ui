import * as React from 'react';
import { component as Icon } from '../index';
import { IconsVisibilityProps } from '../Visibility.types';

import { display } from './Visibility-display.stories';
import { appearance } from './Visibility-appearance.stories';
import { size } from './Visibility-size.stories';
import { theme } from './Visibility-theme.stories';

export const Visibility = (args: IconsVisibilityProps) => (
  <Icon {...args}></Icon>
);

Visibility.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Visibility.argTypes = {
  display,
  appearance,
  size,
  theme,
};
