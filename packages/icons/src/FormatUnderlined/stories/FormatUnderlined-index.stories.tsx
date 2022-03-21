import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFormatUnderlinedProps } from '../FormatUnderlined.types';

import { display } from './FormatUnderlined-display.stories';
import { appearance } from './FormatUnderlined-appearance.stories';
import { size } from './FormatUnderlined-size.stories';
import { theme } from './FormatUnderlined-theme.stories';

export const FormatUnderlined = (args: IconsFormatUnderlinedProps) => (
  <Icon {...args}></Icon>
);

FormatUnderlined.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

FormatUnderlined.argTypes = {
  display,
  appearance,
  size,
  theme,
};
