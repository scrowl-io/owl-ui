import * as React from 'react';
import { component as Icon } from '../index';
import { IconsBorderClearProps } from '../BorderClear.types';

import { display } from './BorderClear-display.stories';
import { appearance } from './BorderClear-appearance.stories';
import { size } from './BorderClear-size.stories';
import { theme } from './BorderClear-theme.stories';

export const BorderClear = (args: IconsBorderClearProps) => (
  <Icon {...args}></Icon>
);

BorderClear.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

BorderClear.argTypes = {
  display,
  appearance,
  size,
  theme,
};
