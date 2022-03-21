import * as React from 'react';
import { component as Icon } from '../index';
import { IconsBrokenImageProps } from '../BrokenImage.types';

import { display } from './BrokenImage-display.stories';
import { appearance } from './BrokenImage-appearance.stories';
import { size } from './BrokenImage-size.stories';
import { theme } from './BrokenImage-theme.stories';

export const BrokenImage = (args: IconsBrokenImageProps) => (
  <Icon {...args}></Icon>
);

BrokenImage.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

BrokenImage.argTypes = {
  display,
  appearance,
  size,
  theme,
};
