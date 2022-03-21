import * as React from 'react';
import { component as Icon } from '../index';
import { IconsRoundedCornerProps } from '../RoundedCorner.types';

import { display } from './RoundedCorner-display.stories';
import { appearance } from './RoundedCorner-appearance.stories';
import { size } from './RoundedCorner-size.stories';
import { theme } from './RoundedCorner-theme.stories';

export const RoundedCorner = (args: IconsRoundedCornerProps) => (
  <Icon {...args}></Icon>
);

RoundedCorner.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

RoundedCorner.argTypes = {
  display,
  appearance,
  size,
  theme,
};
