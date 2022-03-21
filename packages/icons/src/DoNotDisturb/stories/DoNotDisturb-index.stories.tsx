import * as React from 'react';
import { component as Icon } from '../index';
import { IconsDoNotDisturbProps } from '../DoNotDisturb.types';

import { display } from './DoNotDisturb-display.stories';
import { appearance } from './DoNotDisturb-appearance.stories';
import { size } from './DoNotDisturb-size.stories';
import { theme } from './DoNotDisturb-theme.stories';

export const DoNotDisturb = (args: IconsDoNotDisturbProps) => (
  <Icon {...args}></Icon>
);

DoNotDisturb.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

DoNotDisturb.argTypes = {
  display,
  appearance,
  size,
  theme,
};
