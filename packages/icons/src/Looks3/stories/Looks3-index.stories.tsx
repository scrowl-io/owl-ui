import * as React from 'react';
import { component as Icon } from '../index';
import { IconsLooks3Props } from '../Looks3.types';

import { display } from './Looks3-display.stories';
import { appearance } from './Looks3-appearance.stories';
import { size } from './Looks3-size.stories';
import { theme } from './Looks3-theme.stories';

export const Looks3 = (args: IconsLooks3Props) => (
  <Icon {...args}></Icon>
);

Looks3.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Looks3.argTypes = {
  display,
  appearance,
  size,
  theme,
};
