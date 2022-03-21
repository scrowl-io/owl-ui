import * as React from 'react';
import { component as Icon } from '../index';
import { IconsGifProps } from '../Gif.types';

import { display } from './Gif-display.stories';
import { appearance } from './Gif-appearance.stories';
import { size } from './Gif-size.stories';
import { theme } from './Gif-theme.stories';

export const Gif = (args: IconsGifProps) => (
  <Icon {...args}></Icon>
);

Gif.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Gif.argTypes = {
  display,
  appearance,
  size,
  theme,
};
