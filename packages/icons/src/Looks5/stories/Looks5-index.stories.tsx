import * as React from 'react';
import { component as Icon } from '../index';
import { IconsLooks5Props } from '../Looks5.types';

import { display } from './Looks5-display.stories';
import { appearance } from './Looks5-appearance.stories';
import { size } from './Looks5-size.stories';
import { theme } from './Looks5-theme.stories';

export const Looks5 = (args: IconsLooks5Props) => (
  <Icon {...args}></Icon>
);

Looks5.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Looks5.argTypes = {
  display,
  appearance,
  size,
  theme,
};
