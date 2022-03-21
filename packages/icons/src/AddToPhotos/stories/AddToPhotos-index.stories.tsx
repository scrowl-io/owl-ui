import * as React from 'react';
import { component as Icon } from '../index';
import { IconsAddToPhotosProps } from '../AddToPhotos.types';

import { display } from './AddToPhotos-display.stories';
import { appearance } from './AddToPhotos-appearance.stories';
import { size } from './AddToPhotos-size.stories';
import { theme } from './AddToPhotos-theme.stories';

export const AddToPhotos = (args: IconsAddToPhotosProps) => (
  <Icon {...args}></Icon>
);

AddToPhotos.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

AddToPhotos.argTypes = {
  display,
  appearance,
  size,
  theme,
};
