import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFormatColorResetProps } from '../FormatColorReset.types';

import { display } from './FormatColorReset-display.stories';
import { appearance } from './FormatColorReset-appearance.stories';
import { size } from './FormatColorReset-size.stories';
import { theme } from './FormatColorReset-theme.stories';

export const FormatColorReset = (args: IconsFormatColorResetProps) => (
  <Icon {...args}></Icon>
);

FormatColorReset.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

FormatColorReset.argTypes = {
  display,
  appearance,
  size,
  theme,
};
