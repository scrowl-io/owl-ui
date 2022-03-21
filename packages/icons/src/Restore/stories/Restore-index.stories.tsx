import * as React from 'react';
import { component as Icon } from '../index';
import { IconsRestoreProps } from '../Restore.types';

import { display } from './Restore-display.stories';
import { appearance } from './Restore-appearance.stories';
import { size } from './Restore-size.stories';
import { theme } from './Restore-theme.stories';

export const Restore = (args: IconsRestoreProps) => (
  <Icon {...args}></Icon>
);

Restore.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Restore.argTypes = {
  display,
  appearance,
  size,
  theme,
};
