import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFormatIndentDecreaseProps } from '../FormatIndentDecrease.types';

import { display } from './FormatIndentDecrease-display.stories';
import { appearance } from './FormatIndentDecrease-appearance.stories';
import { size } from './FormatIndentDecrease-size.stories';
import { theme } from './FormatIndentDecrease-theme.stories';

export const FormatIndentDecrease = (args: IconsFormatIndentDecreaseProps) => (
  <Icon {...args}></Icon>
);

FormatIndentDecrease.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

FormatIndentDecrease.argTypes = {
  display,
  appearance,
  size,
  theme,
};
