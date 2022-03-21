import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPhotoProps } from '../Photo.types';

import { display } from './Photo-display.stories';
import { appearance } from './Photo-appearance.stories';
import { size } from './Photo-size.stories';
import { theme } from './Photo-theme.stories';

export const Photo = (args: IconsPhotoProps) => (
  <Icon {...args}></Icon>
);

Photo.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Photo.argTypes = {
  display,
  appearance,
  size,
  theme,
};
