import * as React from 'react';
import { component as Icon } from '../index';
import { IconsAccessibilityProps } from '../Accessibility.types';

import { display } from './Accessibility-display.stories';
import { appearance } from './Accessibility-appearance.stories';
import { size } from './Accessibility-size.stories';
import { theme } from './Accessibility-theme.stories';

export const Accessibility = (args: IconsAccessibilityProps) => (
  <Icon {...args}></Icon>
);

Accessibility.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Accessibility.argTypes = {
  display,
  appearance,
  size,
  theme,
};
