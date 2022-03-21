import * as React from 'react';
import { component as Icon } from '../index';
import { IconsTabProps } from '../Tab.types';

import { display } from './Tab-display.stories';
import { appearance } from './Tab-appearance.stories';
import { size } from './Tab-size.stories';
import { theme } from './Tab-theme.stories';

export const Tab = (args: IconsTabProps) => (
  <Icon {...args}></Icon>
);

Tab.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Tab.argTypes = {
  display,
  appearance,
  size,
  theme,
};
