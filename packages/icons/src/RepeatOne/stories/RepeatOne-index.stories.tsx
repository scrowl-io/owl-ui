import * as React from 'react';
import { component as Icon } from '../index';
import { IconsRepeatOneProps } from '../RepeatOne.types';

import { display } from './RepeatOne-display.stories';
import { appearance } from './RepeatOne-appearance.stories';
import { size } from './RepeatOne-size.stories';
import { theme } from './RepeatOne-theme.stories';

export const RepeatOne = (args: IconsRepeatOneProps) => (
  <Icon {...args}></Icon>
);

RepeatOne.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

RepeatOne.argTypes = {
  display,
  appearance,
  size,
  theme,
};
