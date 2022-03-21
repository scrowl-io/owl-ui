import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFilterFramesProps } from '../FilterFrames.types';

import { display } from './FilterFrames-display.stories';
import { appearance } from './FilterFrames-appearance.stories';
import { size } from './FilterFrames-size.stories';
import { theme } from './FilterFrames-theme.stories';

export const FilterFrames = (args: IconsFilterFramesProps) => (
  <Icon {...args}></Icon>
);

FilterFrames.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

FilterFrames.argTypes = {
  display,
  appearance,
  size,
  theme,
};
