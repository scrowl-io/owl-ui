import * as React from 'react';
import { component as Icon } from '../index';
import { IconsSystemUpdateProps } from '../SystemUpdate.types';

import { display } from './SystemUpdate-display.stories';
import { appearance } from './SystemUpdate-appearance.stories';
import { size } from './SystemUpdate-size.stories';
import { theme } from './SystemUpdate-theme.stories';

export const SystemUpdate = (args: IconsSystemUpdateProps) => (
  <Icon {...args}></Icon>
);

SystemUpdate.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

SystemUpdate.argTypes = {
  display,
  appearance,
  size,
  theme,
};
