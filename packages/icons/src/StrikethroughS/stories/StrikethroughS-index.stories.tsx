import * as React from 'react';
import { component as Icon } from '../index';
import { IconsStrikethroughSProps } from '../StrikethroughS.types';

import { display } from './StrikethroughS-display.stories';
import { appearance } from './StrikethroughS-appearance.stories';
import { size } from './StrikethroughS-size.stories';
import { theme } from './StrikethroughS-theme.stories';

export const StrikethroughS = (args: IconsStrikethroughSProps) => (
  <Icon {...args}></Icon>
);

StrikethroughS.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

StrikethroughS.argTypes = {
  display,
  appearance,
  size,
  theme,
};
