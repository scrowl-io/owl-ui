import * as React from 'react';
import { component as Icon } from '../index';
import { IconsCloseProps } from '../Close.types';

import { display } from './Close-display.stories';
import { appearance } from './Close-appearance.stories';
import { size } from './Close-size.stories';
import { theme } from './Close-theme.stories';

export const Close = (args: IconsCloseProps) => (
  <Icon {...args}></Icon>
);

Close.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Close.argTypes = {
  display,
  appearance,
  size,
  theme,
};
