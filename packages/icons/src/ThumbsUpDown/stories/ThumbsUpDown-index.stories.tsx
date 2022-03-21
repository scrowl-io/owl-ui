import * as React from 'react';
import { component as Icon } from '../index';
import { IconsThumbsUpDownProps } from '../ThumbsUpDown.types';

import { display } from './ThumbsUpDown-display.stories';
import { appearance } from './ThumbsUpDown-appearance.stories';
import { size } from './ThumbsUpDown-size.stories';
import { theme } from './ThumbsUpDown-theme.stories';

export const ThumbsUpDown = (args: IconsThumbsUpDownProps) => (
  <Icon {...args}></Icon>
);

ThumbsUpDown.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

ThumbsUpDown.argTypes = {
  display,
  appearance,
  size,
  theme,
};
