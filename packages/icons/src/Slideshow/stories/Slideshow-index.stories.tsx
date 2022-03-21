import * as React from 'react';
import { component as Icon } from '../index';
import { IconsSlideshowProps } from '../Slideshow.types';

import { display } from './Slideshow-display.stories';
import { appearance } from './Slideshow-appearance.stories';
import { size } from './Slideshow-size.stories';
import { theme } from './Slideshow-theme.stories';

export const Slideshow = (args: IconsSlideshowProps) => (
  <Icon {...args}></Icon>
);

Slideshow.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Slideshow.argTypes = {
  display,
  appearance,
  size,
  theme,
};
