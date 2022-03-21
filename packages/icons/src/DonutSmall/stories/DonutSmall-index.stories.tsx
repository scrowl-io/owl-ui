import * as React from 'react';
import { component as Icon } from '../index';
import { IconsDonutSmallProps } from '../DonutSmall.types';

import { display } from './DonutSmall-display.stories';
import { appearance } from './DonutSmall-appearance.stories';
import { size } from './DonutSmall-size.stories';
import { theme } from './DonutSmall-theme.stories';

export const DonutSmall = (args: IconsDonutSmallProps) => (
  <Icon {...args}></Icon>
);

DonutSmall.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

DonutSmall.argTypes = {
  display,
  appearance,
  size,
  theme,
};
