import * as React from 'react';
import { component as Icon } from '../index';
import { IconsCodeProps } from '../Code.types';

import { display } from './Code-display.stories';
import { appearance } from './Code-appearance.stories';
import { size } from './Code-size.stories';
import { theme } from './Code-theme.stories';

export const Code = (args: IconsCodeProps) => (
  <Icon {...args}></Icon>
);

Code.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Code.argTypes = {
  display,
  appearance,
  size,
  theme,
};
