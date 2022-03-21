import * as React from 'react';
import { component as Icon } from '../index';
import { IconsVerticalAlignCenterProps } from '../VerticalAlignCenter.types';

import { display } from './VerticalAlignCenter-display.stories';
import { appearance } from './VerticalAlignCenter-appearance.stories';
import { size } from './VerticalAlignCenter-size.stories';
import { theme } from './VerticalAlignCenter-theme.stories';

export const VerticalAlignCenter = (args: IconsVerticalAlignCenterProps) => (
  <Icon {...args}></Icon>
);

VerticalAlignCenter.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

VerticalAlignCenter.argTypes = {
  display,
  appearance,
  size,
  theme,
};
