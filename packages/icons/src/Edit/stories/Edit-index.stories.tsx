import * as React from 'react';
import { component as Icon } from '../index';
import { IconsEditProps } from '../Edit.types';

import { display } from './Edit-display.stories';
import { appearance } from './Edit-appearance.stories';
import { size } from './Edit-size.stories';
import { theme } from './Edit-theme.stories';

export const Edit = (args: IconsEditProps) => (
  <Icon {...args}></Icon>
);

Edit.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Edit.argTypes = {
  display,
  appearance,
  size,
  theme,
};
