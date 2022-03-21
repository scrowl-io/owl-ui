import * as React from 'react';
import { component as Icon } from '../index';
import { IconsSearchProps } from '../Search.types';

import { display } from './Search-display.stories';
import { appearance } from './Search-appearance.stories';
import { size } from './Search-size.stories';
import { theme } from './Search-theme.stories';

export const Search = (args: IconsSearchProps) => (
  <Icon {...args}></Icon>
);

Search.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Search.argTypes = {
  display,
  appearance,
  size,
  theme,
};
