import * as React from 'react';
import { component as Icon } from '../index';
import { IconsInvertColorsProps } from '../InvertColors.types';

import { display } from './InvertColors-display.stories';
import { appearance } from './InvertColors-appearance.stories';
import { size } from './InvertColors-size.stories';
import { theme } from './InvertColors-theme.stories';

export const InvertColors = (args: IconsInvertColorsProps) => (
  <Icon {...args}></Icon>
);

InvertColors.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

InvertColors.argTypes = {
  display,
  appearance,
  size,
  theme,
};
