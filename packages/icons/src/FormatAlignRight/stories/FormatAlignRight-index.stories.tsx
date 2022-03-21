import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFormatAlignRightProps } from '../FormatAlignRight.types';

import { display } from './FormatAlignRight-display.stories';
import { appearance } from './FormatAlignRight-appearance.stories';
import { size } from './FormatAlignRight-size.stories';
import { theme } from './FormatAlignRight-theme.stories';

export const FormatAlignRight = (args: IconsFormatAlignRightProps) => (
  <Icon {...args}></Icon>
);

FormatAlignRight.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

FormatAlignRight.argTypes = {
  display,
  appearance,
  size,
  theme,
};
