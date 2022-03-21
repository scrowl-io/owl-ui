import * as React from 'react';
import { component as Icon } from '../index';
import { IconsMouseProps } from '../Mouse.types';

import { display } from './Mouse-display.stories';
import { appearance } from './Mouse-appearance.stories';
import { size } from './Mouse-size.stories';
import { theme } from './Mouse-theme.stories';

export const Mouse = (args: IconsMouseProps) => (
  <Icon {...args}></Icon>
);

Mouse.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Mouse.argTypes = {
  display,
  appearance,
  size,
  theme,
};
