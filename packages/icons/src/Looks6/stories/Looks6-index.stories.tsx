import * as React from 'react';
import { component as Icon } from '../index';
import { IconsLooks6Props } from '../Looks6.types';

import { display } from './Looks6-display.stories';
import { appearance } from './Looks6-appearance.stories';
import { size } from './Looks6-size.stories';
import { theme } from './Looks6-theme.stories';

export const Looks6 = (args: IconsLooks6Props) => (
  <Icon {...args}></Icon>
);

Looks6.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Looks6.argTypes = {
  display,
  appearance,
  size,
  theme,
};
