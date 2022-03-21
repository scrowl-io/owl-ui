import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFormatColorTextProps } from '../FormatColorText.types';

import { display } from './FormatColorText-display.stories';
import { appearance } from './FormatColorText-appearance.stories';
import { size } from './FormatColorText-size.stories';
import { theme } from './FormatColorText-theme.stories';

export const FormatColorText = (args: IconsFormatColorTextProps) => (
  <Icon {...args}></Icon>
);

FormatColorText.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

FormatColorText.argTypes = {
  display,
  appearance,
  size,
  theme,
};
