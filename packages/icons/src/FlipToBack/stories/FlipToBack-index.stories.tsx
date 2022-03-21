import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFlipToBackProps } from '../FlipToBack.types';

import { display } from './FlipToBack-display.stories';
import { appearance } from './FlipToBack-appearance.stories';
import { size } from './FlipToBack-size.stories';
import { theme } from './FlipToBack-theme.stories';

export const FlipToBack = (args: IconsFlipToBackProps) => (
  <Icon {...args}></Icon>
);

FlipToBack.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

FlipToBack.argTypes = {
  display,
  appearance,
  size,
  theme,
};
