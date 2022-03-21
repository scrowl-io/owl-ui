import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFormatPaintProps } from '../FormatPaint.types';

import { display } from './FormatPaint-display.stories';
import { appearance } from './FormatPaint-appearance.stories';
import { size } from './FormatPaint-size.stories';
import { theme } from './FormatPaint-theme.stories';

export const FormatPaint = (args: IconsFormatPaintProps) => (
  <Icon {...args}></Icon>
);

FormatPaint.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

FormatPaint.argTypes = {
  display,
  appearance,
  size,
  theme,
};
