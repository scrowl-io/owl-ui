import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFormatListNumberedProps } from '../FormatListNumbered.types';

import { display } from './FormatListNumbered-display.stories';
import { appearance } from './FormatListNumbered-appearance.stories';
import { size } from './FormatListNumbered-size.stories';
import { theme } from './FormatListNumbered-theme.stories';

export const FormatListNumbered = (args: IconsFormatListNumberedProps) => (
  <Icon {...args}></Icon>
);

FormatListNumbered.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

FormatListNumbered.argTypes = {
  display,
  appearance,
  size,
  theme,
};
