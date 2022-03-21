import * as React from 'react';
import { component as Icon } from '../index';
import { IconsHelpProps } from '../Help.types';

import { display } from './Help-display.stories';
import { appearance } from './Help-appearance.stories';
import { size } from './Help-size.stories';
import { theme } from './Help-theme.stories';

export const Help = (args: IconsHelpProps) => (
  <Icon {...args}></Icon>
);

Help.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Help.argTypes = {
  display,
  appearance,
  size,
  theme,
};
