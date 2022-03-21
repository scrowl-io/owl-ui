import * as React from 'react';
import { component as Icon } from '../index';
import { IconsSkipNextProps } from '../SkipNext.types';

import { display } from './SkipNext-display.stories';
import { appearance } from './SkipNext-appearance.stories';
import { size } from './SkipNext-size.stories';
import { theme } from './SkipNext-theme.stories';

export const SkipNext = (args: IconsSkipNextProps) => (
  <Icon {...args}></Icon>
);

SkipNext.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

SkipNext.argTypes = {
  display,
  appearance,
  size,
  theme,
};
