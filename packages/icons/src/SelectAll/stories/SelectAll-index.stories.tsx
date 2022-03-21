import * as React from 'react';
import { component as Icon } from '../index';
import { IconsSelectAllProps } from '../SelectAll.types';

import { display } from './SelectAll-display.stories';
import { appearance } from './SelectAll-appearance.stories';
import { size } from './SelectAll-size.stories';
import { theme } from './SelectAll-theme.stories';

export const SelectAll = (args: IconsSelectAllProps) => (
  <Icon {...args}></Icon>
);

SelectAll.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

SelectAll.argTypes = {
  display,
  appearance,
  size,
  theme,
};
