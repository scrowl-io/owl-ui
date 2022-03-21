import * as React from 'react';
import { component as Icon } from '../index';
import { IconsVerticalAlignTopProps } from '../VerticalAlignTop.types';

import { display } from './VerticalAlignTop-display.stories';
import { appearance } from './VerticalAlignTop-appearance.stories';
import { size } from './VerticalAlignTop-size.stories';
import { theme } from './VerticalAlignTop-theme.stories';

export const VerticalAlignTop = (args: IconsVerticalAlignTopProps) => (
  <Icon {...args}></Icon>
);

VerticalAlignTop.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

VerticalAlignTop.argTypes = {
  display,
  appearance,
  size,
  theme,
};
