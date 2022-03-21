import * as React from 'react';
import { component as Icon } from '../index';
import { IconsGroupWorkProps } from '../GroupWork.types';

import { display } from './GroupWork-display.stories';
import { appearance } from './GroupWork-appearance.stories';
import { size } from './GroupWork-size.stories';
import { theme } from './GroupWork-theme.stories';

export const GroupWork = (args: IconsGroupWorkProps) => (
  <Icon {...args}></Icon>
);

GroupWork.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

GroupWork.argTypes = {
  display,
  appearance,
  size,
  theme,
};
