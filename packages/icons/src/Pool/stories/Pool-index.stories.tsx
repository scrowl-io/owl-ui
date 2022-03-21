import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPoolProps } from '../Pool.types';

import { display } from './Pool-display.stories';
import { appearance } from './Pool-appearance.stories';
import { size } from './Pool-size.stories';
import { theme } from './Pool-theme.stories';

export const Pool = (args: IconsPoolProps) => (
  <Icon {...args}></Icon>
);

Pool.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Pool.argTypes = {
  display,
  appearance,
  size,
  theme,
};
