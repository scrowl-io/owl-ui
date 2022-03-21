import * as React from 'react';
import { component as Icon } from '../index';
import { IconsGroupAddProps } from '../GroupAdd.types';

import { display } from './GroupAdd-display.stories';
import { appearance } from './GroupAdd-appearance.stories';
import { size } from './GroupAdd-size.stories';
import { theme } from './GroupAdd-theme.stories';

export const GroupAdd = (args: IconsGroupAddProps) => (
  <Icon {...args}></Icon>
);

GroupAdd.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

GroupAdd.argTypes = {
  display,
  appearance,
  size,
  theme,
};
