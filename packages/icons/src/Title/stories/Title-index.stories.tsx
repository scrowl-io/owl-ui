import * as React from 'react';
import { component as Icon } from '../index';
import { IconsTitleProps } from '../Title.types';

import { display } from './Title-display.stories';
import { appearance } from './Title-appearance.stories';
import { size } from './Title-size.stories';
import { theme } from './Title-theme.stories';

export const Title = (args: IconsTitleProps) => (
  <Icon {...args}></Icon>
);

Title.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Title.argTypes = {
  display,
  appearance,
  size,
  theme,
};
