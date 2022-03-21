import * as React from 'react';
import { component as Icon } from '../index';
import { IconsBlockProps } from '../Block.types';

import { display } from './Block-display.stories';
import { appearance } from './Block-appearance.stories';
import { size } from './Block-size.stories';
import { theme } from './Block-theme.stories';

export const Block = (args: IconsBlockProps) => (
  <Icon {...args}></Icon>
);

Block.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Block.argTypes = {
  display,
  appearance,
  size,
  theme,
};
