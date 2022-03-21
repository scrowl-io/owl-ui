import * as React from 'react';
import { component as Icon } from '../index';
import { IconsModeEditProps } from '../ModeEdit.types';

import { display } from './ModeEdit-display.stories';
import { appearance } from './ModeEdit-appearance.stories';
import { size } from './ModeEdit-size.stories';
import { theme } from './ModeEdit-theme.stories';

export const ModeEdit = (args: IconsModeEditProps) => (
  <Icon {...args}></Icon>
);

ModeEdit.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

ModeEdit.argTypes = {
  display,
  appearance,
  size,
  theme,
};
