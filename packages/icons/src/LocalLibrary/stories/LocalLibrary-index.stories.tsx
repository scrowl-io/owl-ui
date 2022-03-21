import * as React from 'react';
import { component as Icon } from '../index';
import { IconsLocalLibraryProps } from '../LocalLibrary.types';

import { display } from './LocalLibrary-display.stories';
import { appearance } from './LocalLibrary-appearance.stories';
import { size } from './LocalLibrary-size.stories';
import { theme } from './LocalLibrary-theme.stories';

export const LocalLibrary = (args: IconsLocalLibraryProps) => (
  <Icon {...args}></Icon>
);

LocalLibrary.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

LocalLibrary.argTypes = {
  display,
  appearance,
  size,
  theme,
};
