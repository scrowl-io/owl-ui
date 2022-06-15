import * as React from 'react';
import { component as Carousel } from '../index';
import { CarouselDefaultProps } from '../Default.types';

import { appearance } from './Default-appearance.stories';
import { size } from './Default-size.stories';
import { theme } from './Default-theme.stories';

export const Default = (args: CarouselDefaultProps) => (
  <Carousel {...args}>Hello World</Carousel>
);

Default.args = {
  appearance: appearance.defaultValue,
  size: size.defaultValue,
  theme: theme.defaultValue,
};

Default.argTypes = {
  appearance,
  size,
  theme,
};
