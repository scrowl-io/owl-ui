import * as React from 'react';
import { component as Icon } from '../index';
import { IconsBlurOnProps } from '../BlurOn.types';

import { display } from './BlurOn-display.stories';
import { appearance } from './BlurOn-appearance.stories';
import { size } from './BlurOn-size.stories';
import { theme } from './BlurOn-theme.stories';

export const BlurOn = (args: IconsBlurOnProps) => (
  <Icon {...args}></Icon>
);

BlurOn.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

BlurOn.argTypes = {
  display,
  appearance,
  size,
  theme,
};
