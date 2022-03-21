import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFormatAlignJustifyProps } from '../FormatAlignJustify.types';

import { display } from './FormatAlignJustify-display.stories';
import { appearance } from './FormatAlignJustify-appearance.stories';
import { size } from './FormatAlignJustify-size.stories';
import { theme } from './FormatAlignJustify-theme.stories';

export const FormatAlignJustify = (args: IconsFormatAlignJustifyProps) => (
  <Icon {...args}></Icon>
);

FormatAlignJustify.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

FormatAlignJustify.argTypes = {
  display,
  appearance,
  size,
  theme,
};
