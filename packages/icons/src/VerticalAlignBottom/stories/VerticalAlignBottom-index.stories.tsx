import * as React from 'react';
import { component as Icon } from '../index';
import { IconsVerticalAlignBottomProps } from '../VerticalAlignBottom.types';

import { display } from './VerticalAlignBottom-display.stories';
import { appearance } from './VerticalAlignBottom-appearance.stories';
import { size } from './VerticalAlignBottom-size.stories';
import { theme } from './VerticalAlignBottom-theme.stories';

export const VerticalAlignBottom = (args: IconsVerticalAlignBottomProps) => (
  <Icon {...args}></Icon>
);

VerticalAlignBottom.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

VerticalAlignBottom.argTypes = {
  display,
  appearance,
  size,
  theme,
};
