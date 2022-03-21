import * as React from 'react';
import { component as Icon } from '../index';
import { IconsImageProps } from '../Image.types';

import { display } from './Image-display.stories';
import { appearance } from './Image-appearance.stories';
import { size } from './Image-size.stories';
import { theme } from './Image-theme.stories';

export const Image = (args: IconsImageProps) => (
  <Icon {...args}></Icon>
);

Image.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Image.argTypes = {
  display,
  appearance,
  size,
  theme,
};
