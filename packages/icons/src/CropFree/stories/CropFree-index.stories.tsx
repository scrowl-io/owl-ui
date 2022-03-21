import * as React from 'react';
import { component as Icon } from '../index';
import { IconsCropFreeProps } from '../CropFree.types';

import { display } from './CropFree-display.stories';
import { appearance } from './CropFree-appearance.stories';
import { size } from './CropFree-size.stories';
import { theme } from './CropFree-theme.stories';

export const CropFree = (args: IconsCropFreeProps) => (
  <Icon {...args}></Icon>
);

CropFree.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

CropFree.argTypes = {
  display,
  appearance,
  size,
  theme,
};
