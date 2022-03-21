import * as React from 'react';
import { component as Icon } from '../index';
import { IconsInvertColorsOffProps } from '../InvertColorsOff.types';

import { display } from './InvertColorsOff-display.stories';
import { appearance } from './InvertColorsOff-appearance.stories';
import { size } from './InvertColorsOff-size.stories';
import { theme } from './InvertColorsOff-theme.stories';

export const InvertColorsOff = (args: IconsInvertColorsOffProps) => (
  <Icon {...args}></Icon>
);

InvertColorsOff.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

InvertColorsOff.argTypes = {
  display,
  appearance,
  size,
  theme,
};
