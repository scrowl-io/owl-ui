import * as React from 'react';
import { component as Icon } from '../index';
import { IconsCropOriginalProps } from '../CropOriginal.types';

import { display } from './CropOriginal-display.stories';
import { appearance } from './CropOriginal-appearance.stories';
import { size } from './CropOriginal-size.stories';
import { theme } from './CropOriginal-theme.stories';

export const CropOriginal = (args: IconsCropOriginalProps) => (
  <Icon {...args}></Icon>
);

CropOriginal.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

CropOriginal.argTypes = {
  display,
  appearance,
  size,
  theme,
};
