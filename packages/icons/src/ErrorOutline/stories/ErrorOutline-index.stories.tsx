import * as React from 'react';
import { component as Icon } from '../index';
import { IconsErrorOutlineProps } from '../ErrorOutline.types';

import { display } from './ErrorOutline-display.stories';
import { appearance } from './ErrorOutline-appearance.stories';
import { size } from './ErrorOutline-size.stories';
import { theme } from './ErrorOutline-theme.stories';

export const ErrorOutline = (args: IconsErrorOutlineProps) => (
  <Icon {...args}></Icon>
);

ErrorOutline.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

ErrorOutline.argTypes = {
  display,
  appearance,
  size,
  theme,
};
