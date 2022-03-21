import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFormatAlignLeftProps } from '../FormatAlignLeft.types';

import { display } from './FormatAlignLeft-display.stories';
import { appearance } from './FormatAlignLeft-appearance.stories';
import { size } from './FormatAlignLeft-size.stories';
import { theme } from './FormatAlignLeft-theme.stories';

export const FormatAlignLeft = (args: IconsFormatAlignLeftProps) => (
  <Icon {...args}></Icon>
);

FormatAlignLeft.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

FormatAlignLeft.argTypes = {
  display,
  appearance,
  size,
  theme,
};
