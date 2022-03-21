import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFormatSizeProps } from '../FormatSize.types';

import { display } from './FormatSize-display.stories';
import { appearance } from './FormatSize-appearance.stories';
import { size } from './FormatSize-size.stories';
import { theme } from './FormatSize-theme.stories';

export const FormatSize = (args: IconsFormatSizeProps) => (
  <Icon {...args}></Icon>
);

FormatSize.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

FormatSize.argTypes = {
  display,
  appearance,
  size,
  theme,
};
