import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFormatBoldProps } from '../FormatBold.types';

import { display } from './FormatBold-display.stories';
import { appearance } from './FormatBold-appearance.stories';
import { size } from './FormatBold-size.stories';
import { theme } from './FormatBold-theme.stories';

export const FormatBold = (args: IconsFormatBoldProps) => (
  <Icon {...args}></Icon>
);

FormatBold.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

FormatBold.argTypes = {
  display,
  appearance,
  size,
  theme,
};
