import * as React from 'react';
import { component as Icon } from '../index';
import { IconsColorizeProps } from '../Colorize.types';

import { display } from './Colorize-display.stories';
import { appearance } from './Colorize-appearance.stories';
import { size } from './Colorize-size.stories';
import { theme } from './Colorize-theme.stories';

export const Colorize = (args: IconsColorizeProps) => (
  <Icon {...args}></Icon>
);

Colorize.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Colorize.argTypes = {
  display,
  appearance,
  size,
  theme,
};
