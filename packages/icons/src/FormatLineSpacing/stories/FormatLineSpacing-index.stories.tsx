import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFormatLineSpacingProps } from '../FormatLineSpacing.types';

import { display } from './FormatLineSpacing-display.stories';
import { appearance } from './FormatLineSpacing-appearance.stories';
import { size } from './FormatLineSpacing-size.stories';
import { theme } from './FormatLineSpacing-theme.stories';

export const FormatLineSpacing = (args: IconsFormatLineSpacingProps) => (
  <Icon {...args}></Icon>
);

FormatLineSpacing.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

FormatLineSpacing.argTypes = {
  display,
  appearance,
  size,
  theme,
};
