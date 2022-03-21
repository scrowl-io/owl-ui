import * as React from 'react';
import { component as Icon } from '../index';
import { IconsThumbDownProps } from '../ThumbDown.types';

import { display } from './ThumbDown-display.stories';
import { appearance } from './ThumbDown-appearance.stories';
import { size } from './ThumbDown-size.stories';
import { theme } from './ThumbDown-theme.stories';

export const ThumbDown = (args: IconsThumbDownProps) => (
  <Icon {...args}></Icon>
);

ThumbDown.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

ThumbDown.argTypes = {
  display,
  appearance,
  size,
  theme,
};
