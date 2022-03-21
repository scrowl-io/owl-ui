import * as React from 'react';
import { component as Icon } from '../index';
import { IconsBlurOffProps } from '../BlurOff.types';

import { display } from './BlurOff-display.stories';
import { appearance } from './BlurOff-appearance.stories';
import { size } from './BlurOff-size.stories';
import { theme } from './BlurOff-theme.stories';

export const BlurOff = (args: IconsBlurOffProps) => (
  <Icon {...args}></Icon>
);

BlurOff.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

BlurOff.argTypes = {
  display,
  appearance,
  size,
  theme,
};
