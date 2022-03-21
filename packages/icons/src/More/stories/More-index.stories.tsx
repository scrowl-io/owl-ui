import * as React from 'react';
import { component as Icon } from '../index';
import { IconsMoreProps } from '../More.types';

import { display } from './More-display.stories';
import { appearance } from './More-appearance.stories';
import { size } from './More-size.stories';
import { theme } from './More-theme.stories';

export const More = (args: IconsMoreProps) => (
  <Icon {...args}></Icon>
);

More.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

More.argTypes = {
  display,
  appearance,
  size,
  theme,
};
