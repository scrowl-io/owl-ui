import * as React from 'react';
import { component as Icon } from '../index';
import { IconsHighlightOffProps } from '../HighlightOff.types';

import { display } from './HighlightOff-display.stories';
import { appearance } from './HighlightOff-appearance.stories';
import { size } from './HighlightOff-size.stories';
import { theme } from './HighlightOff-theme.stories';

export const HighlightOff = (args: IconsHighlightOffProps) => (
  <Icon {...args}></Icon>
);

HighlightOff.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

HighlightOff.argTypes = {
  display,
  appearance,
  size,
  theme,
};
