import * as React from 'react';
import { component as Icon } from '../index';
import { IconsTocProps } from '../Toc.types';

import { display } from './Toc-display.stories';
import { appearance } from './Toc-appearance.stories';
import { size } from './Toc-size.stories';
import { theme } from './Toc-theme.stories';

export const Toc = (args: IconsTocProps) => (
  <Icon {...args}></Icon>
);

Toc.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Toc.argTypes = {
  display,
  appearance,
  size,
  theme,
};
