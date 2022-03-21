import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPeopleProps } from '../People.types';

import { display } from './People-display.stories';
import { appearance } from './People-appearance.stories';
import { size } from './People-size.stories';
import { theme } from './People-theme.stories';

export const People = (args: IconsPeopleProps) => (
  <Icon {...args}></Icon>
);

People.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

People.argTypes = {
  display,
  appearance,
  size,
  theme,
};
