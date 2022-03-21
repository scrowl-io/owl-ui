import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPlusOneProps } from '../PlusOne.types';

import { display } from './PlusOne-display.stories';
import { appearance } from './PlusOne-appearance.stories';
import { size } from './PlusOne-size.stories';
import { theme } from './PlusOne-theme.stories';

export const PlusOne = (args: IconsPlusOneProps) => (
  <Icon {...args}></Icon>
);

PlusOne.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

PlusOne.argTypes = {
  display,
  appearance,
  size,
  theme,
};
