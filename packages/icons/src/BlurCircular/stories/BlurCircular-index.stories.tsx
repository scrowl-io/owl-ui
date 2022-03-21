import * as React from 'react';
import { component as Icon } from '../index';
import { IconsBlurCircularProps } from '../BlurCircular.types';

import { display } from './BlurCircular-display.stories';
import { appearance } from './BlurCircular-appearance.stories';
import { size } from './BlurCircular-size.stories';
import { theme } from './BlurCircular-theme.stories';

export const BlurCircular = (args: IconsBlurCircularProps) => (
  <Icon {...args}></Icon>
);

BlurCircular.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

BlurCircular.argTypes = {
  display,
  appearance,
  size,
  theme,
};
