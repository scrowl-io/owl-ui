import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFormatTextdirectionRToLProps } from '../FormatTextdirectionRToL.types';

import { display } from './FormatTextdirectionRToL-display.stories';
import { appearance } from './FormatTextdirectionRToL-appearance.stories';
import { size } from './FormatTextdirectionRToL-size.stories';
import { theme } from './FormatTextdirectionRToL-theme.stories';

export const FormatTextdirectionRToL = (args: IconsFormatTextdirectionRToLProps) => (
  <Icon {...args}></Icon>
);

FormatTextdirectionRToL.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

FormatTextdirectionRToL.argTypes = {
  display,
  appearance,
  size,
  theme,
};
