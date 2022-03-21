import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFormatStrikethroughProps } from '../FormatStrikethrough.types';

import { display } from './FormatStrikethrough-display.stories';
import { appearance } from './FormatStrikethrough-appearance.stories';
import { size } from './FormatStrikethrough-size.stories';
import { theme } from './FormatStrikethrough-theme.stories';

export const FormatStrikethrough = (args: IconsFormatStrikethroughProps) => (
  <Icon {...args}></Icon>
);

FormatStrikethrough.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

FormatStrikethrough.argTypes = {
  display,
  appearance,
  size,
  theme,
};
