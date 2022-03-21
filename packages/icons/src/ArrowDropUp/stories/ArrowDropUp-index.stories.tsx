import * as React from 'react';
import { component as Icon } from '../index';
import { IconsArrowDropUpProps } from '../ArrowDropUp.types';

import { display } from './ArrowDropUp-display.stories';
import { appearance } from './ArrowDropUp-appearance.stories';
import { size } from './ArrowDropUp-size.stories';
import { theme } from './ArrowDropUp-theme.stories';

export const ArrowDropUp = (args: IconsArrowDropUpProps) => (
  <Icon {...args}></Icon>
);

ArrowDropUp.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

ArrowDropUp.argTypes = {
  display,
  appearance,
  size,
  theme,
};
