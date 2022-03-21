import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPeopleOutlineProps } from '../PeopleOutline.types';

import { display } from './PeopleOutline-display.stories';
import { appearance } from './PeopleOutline-appearance.stories';
import { size } from './PeopleOutline-size.stories';
import { theme } from './PeopleOutline-theme.stories';

export const PeopleOutline = (args: IconsPeopleOutlineProps) => (
  <Icon {...args}></Icon>
);

PeopleOutline.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

PeopleOutline.argTypes = {
  display,
  appearance,
  size,
  theme,
};
