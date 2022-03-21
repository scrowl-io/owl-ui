import * as React from 'react';
import { component as Icon } from '../index';
import { IconsNaturePeopleProps } from '../NaturePeople.types';

import { display } from './NaturePeople-display.stories';
import { appearance } from './NaturePeople-appearance.stories';
import { size } from './NaturePeople-size.stories';
import { theme } from './NaturePeople-theme.stories';

export const NaturePeople = (args: IconsNaturePeopleProps) => (
  <Icon {...args}></Icon>
);

NaturePeople.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

NaturePeople.argTypes = {
  display,
  appearance,
  size,
  theme,
};
