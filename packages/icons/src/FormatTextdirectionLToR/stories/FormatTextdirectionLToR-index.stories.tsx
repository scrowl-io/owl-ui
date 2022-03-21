import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFormatTextdirectionLToRProps } from '../FormatTextdirectionLToR.types';

import { display } from './FormatTextdirectionLToR-display.stories';
import { appearance } from './FormatTextdirectionLToR-appearance.stories';
import { size } from './FormatTextdirectionLToR-size.stories';
import { theme } from './FormatTextdirectionLToR-theme.stories';

export const FormatTextdirectionLToR = (args: IconsFormatTextdirectionLToRProps) => (
  <Icon {...args}></Icon>
);

FormatTextdirectionLToR.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

FormatTextdirectionLToR.argTypes = {
  display,
  appearance,
  size,
  theme,
};
