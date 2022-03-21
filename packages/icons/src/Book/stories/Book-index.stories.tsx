import * as React from 'react';
import { component as Icon } from '../index';
import { IconsBookProps } from '../Book.types';

import { display } from './Book-display.stories';
import { appearance } from './Book-appearance.stories';
import { size } from './Book-size.stories';
import { theme } from './Book-theme.stories';

export const Book = (args: IconsBookProps) => (
  <Icon {...args}></Icon>
);

Book.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Book.argTypes = {
  display,
  appearance,
  size,
  theme,
};
