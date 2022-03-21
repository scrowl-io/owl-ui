import * as React from 'react';
import { component as Icon } from '../index';
import { IconsAddProps } from '../Add.types';

import { display } from './Add-display.stories';
import { appearance } from './Add-appearance.stories';
import { size } from './Add-size.stories';
import { theme } from './Add-theme.stories';

export const Add = (args: IconsAddProps) => (
  <Icon {...args}></Icon>
);

Add.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Add.argTypes = {
  display,
  appearance,
  size,
  theme,
};
