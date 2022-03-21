import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFormatClearProps } from '../FormatClear.types';

import { display } from './FormatClear-display.stories';
import { appearance } from './FormatClear-appearance.stories';
import { size } from './FormatClear-size.stories';
import { theme } from './FormatClear-theme.stories';

export const FormatClear = (args: IconsFormatClearProps) => (
  <Icon {...args}></Icon>
);

FormatClear.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

FormatClear.argTypes = {
  display,
  appearance,
  size,
  theme,
};
