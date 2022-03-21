import * as React from 'react';
import { component as Icon } from '../index';
import { IconsArrowBackProps } from '../ArrowBack.types';

import { display } from './ArrowBack-display.stories';
import { appearance } from './ArrowBack-appearance.stories';
import { size } from './ArrowBack-size.stories';
import { theme } from './ArrowBack-theme.stories';

export const ArrowBack = (args: IconsArrowBackProps) => (
  <Icon {...args}></Icon>
);

ArrowBack.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

ArrowBack.argTypes = {
  display,
  appearance,
  size,
  theme,
};
