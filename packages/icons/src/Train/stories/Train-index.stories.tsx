import * as React from 'react';
import { component as Icon } from '../index';
import { IconsTrainProps } from '../Train.types';

import { display } from './Train-display.stories';
import { appearance } from './Train-appearance.stories';
import { size } from './Train-size.stories';
import { theme } from './Train-theme.stories';

export const Train = (args: IconsTrainProps) => (
  <Icon {...args}></Icon>
);

Train.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Train.argTypes = {
  display,
  appearance,
  size,
  theme,
};
