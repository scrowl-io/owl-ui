import * as React from 'react';
import { component as Icon } from '../index';
import { IconsDoneAllProps } from '../DoneAll.types';

import { display } from './DoneAll-display.stories';
import { appearance } from './DoneAll-appearance.stories';
import { size } from './DoneAll-size.stories';
import { theme } from './DoneAll-theme.stories';

export const DoneAll = (args: IconsDoneAllProps) => (
  <Icon {...args}></Icon>
);

DoneAll.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

DoneAll.argTypes = {
  display,
  appearance,
  size,
  theme,
};
