import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFormatIndentIncreaseProps } from '../FormatIndentIncrease.types';

import { display } from './FormatIndentIncrease-display.stories';
import { appearance } from './FormatIndentIncrease-appearance.stories';
import { size } from './FormatIndentIncrease-size.stories';
import { theme } from './FormatIndentIncrease-theme.stories';

export const FormatIndentIncrease = (args: IconsFormatIndentIncreaseProps) => (
  <Icon {...args}></Icon>
);

FormatIndentIncrease.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

FormatIndentIncrease.argTypes = {
  display,
  appearance,
  size,
  theme,
};
