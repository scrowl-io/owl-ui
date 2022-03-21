import * as React from 'react';
import { component as Icon } from '../index';
import { IconsRemoveRedEyeProps } from '../RemoveRedEye.types';

import { display } from './RemoveRedEye-display.stories';
import { appearance } from './RemoveRedEye-appearance.stories';
import { size } from './RemoveRedEye-size.stories';
import { theme } from './RemoveRedEye-theme.stories';

export const RemoveRedEye = (args: IconsRemoveRedEyeProps) => (
  <Icon {...args}></Icon>
);

RemoveRedEye.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

RemoveRedEye.argTypes = {
  display,
  appearance,
  size,
  theme,
};
