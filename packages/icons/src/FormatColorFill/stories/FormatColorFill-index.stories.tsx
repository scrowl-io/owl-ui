import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFormatColorFillProps } from '../FormatColorFill.types';

import { display } from './FormatColorFill-display.stories';
import { appearance } from './FormatColorFill-appearance.stories';
import { size } from './FormatColorFill-size.stories';
import { theme } from './FormatColorFill-theme.stories';

export const FormatColorFill = (args: IconsFormatColorFillProps) => (
  <Icon {...args}></Icon>
);

FormatColorFill.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

FormatColorFill.argTypes = {
  display,
  appearance,
  size,
  theme,
};
