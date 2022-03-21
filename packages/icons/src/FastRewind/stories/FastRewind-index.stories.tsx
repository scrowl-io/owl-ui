import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFastRewindProps } from '../FastRewind.types';

import { display } from './FastRewind-display.stories';
import { appearance } from './FastRewind-appearance.stories';
import { size } from './FastRewind-size.stories';
import { theme } from './FastRewind-theme.stories';

export const FastRewind = (args: IconsFastRewindProps) => (
  <Icon {...args}></Icon>
);

FastRewind.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

FastRewind.argTypes = {
  display,
  appearance,
  size,
  theme,
};
