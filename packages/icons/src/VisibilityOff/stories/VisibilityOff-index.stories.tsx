import * as React from 'react';
import { component as Icon } from '../index';
import { IconsVisibilityOffProps } from '../VisibilityOff.types';

import { display } from './VisibilityOff-display.stories';
import { appearance } from './VisibilityOff-appearance.stories';
import { size } from './VisibilityOff-size.stories';
import { theme } from './VisibilityOff-theme.stories';

export const VisibilityOff = (args: IconsVisibilityOffProps) => (
  <Icon {...args}></Icon>
);

VisibilityOff.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

VisibilityOff.argTypes = {
  display,
  appearance,
  size,
  theme,
};
