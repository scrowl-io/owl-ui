import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFlipToFrontProps } from '../FlipToFront.types';

import { display } from './FlipToFront-display.stories';
import { appearance } from './FlipToFront-appearance.stories';
import { size } from './FlipToFront-size.stories';
import { theme } from './FlipToFront-theme.stories';

export const FlipToFront = (args: IconsFlipToFrontProps) => (
  <Icon {...args}></Icon>
);

FlipToFront.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

FlipToFront.argTypes = {
  display,
  appearance,
  size,
  theme,
};
