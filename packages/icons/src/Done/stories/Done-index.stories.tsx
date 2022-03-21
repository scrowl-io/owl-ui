import * as React from 'react';
import { component as Icon } from '../index';
import { IconsDoneProps } from '../Done.types';

import { display } from './Done-display.stories';
import { appearance } from './Done-appearance.stories';
import { size } from './Done-size.stories';
import { theme } from './Done-theme.stories';

export const Done = (args: IconsDoneProps) => (
  <Icon {...args}></Icon>
);

Done.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Done.argTypes = {
  display,
  appearance,
  size,
  theme,
};
