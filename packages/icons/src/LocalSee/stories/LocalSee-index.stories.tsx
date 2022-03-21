import * as React from 'react';
import { component as Icon } from '../index';
import { IconsLocalSeeProps } from '../LocalSee.types';

import { display } from './LocalSee-display.stories';
import { appearance } from './LocalSee-appearance.stories';
import { size } from './LocalSee-size.stories';
import { theme } from './LocalSee-theme.stories';

export const LocalSee = (args: IconsLocalSeeProps) => (
  <Icon {...args}></Icon>
);

LocalSee.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

LocalSee.argTypes = {
  display,
  appearance,
  size,
  theme,
};
