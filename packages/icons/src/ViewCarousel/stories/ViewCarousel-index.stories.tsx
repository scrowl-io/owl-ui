import * as React from 'react';
import { component as Icon } from '../index';
import { IconsViewCarouselProps } from '../ViewCarousel.types';

import { display } from './ViewCarousel-display.stories';
import { appearance } from './ViewCarousel-appearance.stories';
import { size } from './ViewCarousel-size.stories';
import { theme } from './ViewCarousel-theme.stories';

export const ViewCarousel = (args: IconsViewCarouselProps) => (
  <Icon {...args}></Icon>
);

ViewCarousel.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

ViewCarousel.argTypes = {
  display,
  appearance,
  size,
  theme,
};
