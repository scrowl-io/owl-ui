import * as React from 'react';
import { component as Icon } from '../index';
import { IconsWrapTextProps } from '../WrapText.types';

import { display } from './WrapText-display.stories';
import { appearance } from './WrapText-appearance.stories';
import { size } from './WrapText-size.stories';
import { theme } from './WrapText-theme.stories';

export const WrapText = (args: IconsWrapTextProps) => (
  <Icon {...args}></Icon>
);

WrapText.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

WrapText.argTypes = {
  display,
  appearance,
  size,
  theme,
};
