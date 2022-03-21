import * as React from 'react';
import { component as Icon } from '../index';
import { IconsThumbUpProps } from '../ThumbUp.types';

import { display } from './ThumbUp-display.stories';
import { appearance } from './ThumbUp-appearance.stories';
import { size } from './ThumbUp-size.stories';
import { theme } from './ThumbUp-theme.stories';

export const ThumbUp = (args: IconsThumbUpProps) => (
  <Icon {...args}></Icon>
);

ThumbUp.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

ThumbUp.argTypes = {
  display,
  appearance,
  size,
  theme,
};
