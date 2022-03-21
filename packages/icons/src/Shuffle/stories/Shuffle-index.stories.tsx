import * as React from 'react';
import { component as Icon } from '../index';
import { IconsShuffleProps } from '../Shuffle.types';

import { display } from './Shuffle-display.stories';
import { appearance } from './Shuffle-appearance.stories';
import { size } from './Shuffle-size.stories';
import { theme } from './Shuffle-theme.stories';

export const Shuffle = (args: IconsShuffleProps) => (
  <Icon {...args}></Icon>
);

Shuffle.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Shuffle.argTypes = {
  display,
  appearance,
  size,
  theme,
};
