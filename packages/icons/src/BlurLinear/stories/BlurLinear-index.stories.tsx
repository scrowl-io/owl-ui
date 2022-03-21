import * as React from 'react';
import { component as Icon } from '../index';
import { IconsBlurLinearProps } from '../BlurLinear.types';

import { display } from './BlurLinear-display.stories';
import { appearance } from './BlurLinear-appearance.stories';
import { size } from './BlurLinear-size.stories';
import { theme } from './BlurLinear-theme.stories';

export const BlurLinear = (args: IconsBlurLinearProps) => (
  <Icon {...args}></Icon>
);

BlurLinear.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

BlurLinear.argTypes = {
  display,
  appearance,
  size,
  theme,
};
