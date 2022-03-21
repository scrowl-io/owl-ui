import * as React from 'react';
import { component as Icon } from '../index';
import { IconsLooks4Props } from '../Looks4.types';

import { display } from './Looks4-display.stories';
import { appearance } from './Looks4-appearance.stories';
import { size } from './Looks4-size.stories';
import { theme } from './Looks4-theme.stories';

export const Looks4 = (args: IconsLooks4Props) => (
  <Icon {...args}></Icon>
);

Looks4.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Looks4.argTypes = {
  display,
  appearance,
  size,
  theme,
};
