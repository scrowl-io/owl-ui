import * as React from 'react';
import { component as Icon } from '../index';
import { IconsCropRotateProps } from '../CropRotate.types';

import { display } from './CropRotate-display.stories';
import { appearance } from './CropRotate-appearance.stories';
import { size } from './CropRotate-size.stories';
import { theme } from './CropRotate-theme.stories';

export const CropRotate = (args: IconsCropRotateProps) => (
  <Icon {...args}></Icon>
);

CropRotate.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

CropRotate.argTypes = {
  display,
  appearance,
  size,
  theme,
};
