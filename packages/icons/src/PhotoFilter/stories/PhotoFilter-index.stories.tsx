import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPhotoFilterProps } from '../PhotoFilter.types';

import { display } from './PhotoFilter-display.stories';
import { appearance } from './PhotoFilter-appearance.stories';
import { size } from './PhotoFilter-size.stories';
import { theme } from './PhotoFilter-theme.stories';

export const PhotoFilter = (args: IconsPhotoFilterProps) => (
  <Icon {...args}></Icon>
);

PhotoFilter.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

PhotoFilter.argTypes = {
  display,
  appearance,
  size,
  theme,
};
