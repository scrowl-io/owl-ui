import * as React from 'react';
import { component as Icon } from '../index';
import { IconsStoreMallDirectoryProps } from '../StoreMallDirectory.types';

import { display } from './StoreMallDirectory-display.stories';
import { appearance } from './StoreMallDirectory-appearance.stories';
import { size } from './StoreMallDirectory-size.stories';
import { theme } from './StoreMallDirectory-theme.stories';

export const StoreMallDirectory = (args: IconsStoreMallDirectoryProps) => (
  <Icon {...args}></Icon>
);

StoreMallDirectory.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

StoreMallDirectory.argTypes = {
  display,
  appearance,
  size,
  theme,
};
