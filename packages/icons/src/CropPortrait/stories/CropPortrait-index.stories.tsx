import * as React from 'react';
import { component as Icon } from '../index';
import { IconsCropPortraitProps } from '../CropPortrait.types';

import { display } from './CropPortrait-display.stories';
import { appearance } from './CropPortrait-appearance.stories';
import { size } from './CropPortrait-size.stories';
import { theme } from './CropPortrait-theme.stories';

export const CropPortrait = (args: IconsCropPortraitProps) => (
  <Icon {...args}></Icon>
);

CropPortrait.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

CropPortrait.argTypes = {
  display,
  appearance,
  size,
  theme,
};
