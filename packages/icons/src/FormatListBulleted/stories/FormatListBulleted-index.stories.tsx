import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFormatListBulletedProps } from '../FormatListBulleted.types';

import { display } from './FormatListBulleted-display.stories';
import { appearance } from './FormatListBulleted-appearance.stories';
import { size } from './FormatListBulleted-size.stories';
import { theme } from './FormatListBulleted-theme.stories';

export const FormatListBulleted = (args: IconsFormatListBulletedProps) => (
  <Icon {...args}></Icon>
);

FormatListBulleted.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

FormatListBulleted.argTypes = {
  display,
  appearance,
  size,
  theme,
};
