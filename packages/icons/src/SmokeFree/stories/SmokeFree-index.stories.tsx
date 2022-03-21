import * as React from 'react';
import { component as Icon } from '../index';
import { IconsSmokeFreeProps } from '../SmokeFree.types';

import { display } from './SmokeFree-display.stories';
import { appearance } from './SmokeFree-appearance.stories';
import { size } from './SmokeFree-size.stories';
import { theme } from './SmokeFree-theme.stories';

export const SmokeFree = (args: IconsSmokeFreeProps) => (
  <Icon {...args}></Icon>
);

SmokeFree.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

SmokeFree.argTypes = {
  display,
  appearance,
  size,
  theme,
};
