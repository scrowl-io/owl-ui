import * as React from 'react';
import { component as Icon } from '../index';
import { IconsUnarchiveProps } from '../Unarchive.types';

import { display } from './Unarchive-display.stories';
import { appearance } from './Unarchive-appearance.stories';
import { size } from './Unarchive-size.stories';
import { theme } from './Unarchive-theme.stories';

export const Unarchive = (args: IconsUnarchiveProps) => (
  <Icon {...args}></Icon>
);

Unarchive.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Unarchive.argTypes = {
  display,
  appearance,
  size,
  theme,
};
