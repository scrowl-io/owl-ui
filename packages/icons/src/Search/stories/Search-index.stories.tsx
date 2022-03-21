import * as React from 'react';
import { component as Icons } from '../index';
import { IconsSearchProps } from '../Search.types';

import { appearance } from './Search-appearance.stories';
import { size } from './Search-size.stories';
import { theme } from './Search-theme.stories';

export const Search = (args: IconsSearchProps) => <Icons {...args}></Icons>;

Search.args = {
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Search.argTypes = {
  appearance,
  size,
  theme,
};
