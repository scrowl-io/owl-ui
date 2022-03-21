import * as React from 'react';
import { component as Icon } from '../index';
import { IconsAspectRatioProps } from '../AspectRatio.types';

import { display } from './AspectRatio-display.stories';
import { appearance } from './AspectRatio-appearance.stories';
import { size } from './AspectRatio-size.stories';
import { theme } from './AspectRatio-theme.stories';

export const AspectRatio = (args: IconsAspectRatioProps) => (
  <Icon {...args}></Icon>
);

AspectRatio.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

AspectRatio.argTypes = {
  display,
  appearance,
  size,
  theme,
};
