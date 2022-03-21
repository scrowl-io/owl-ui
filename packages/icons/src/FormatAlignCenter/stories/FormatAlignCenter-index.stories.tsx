import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFormatAlignCenterProps } from '../FormatAlignCenter.types';

import { display } from './FormatAlignCenter-display.stories';
import { appearance } from './FormatAlignCenter-appearance.stories';
import { size } from './FormatAlignCenter-size.stories';
import { theme } from './FormatAlignCenter-theme.stories';

export const FormatAlignCenter = (args: IconsFormatAlignCenterProps) => (
  <Icon {...args}></Icon>
);

FormatAlignCenter.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

FormatAlignCenter.argTypes = {
  display,
  appearance,
  size,
  theme,
};
