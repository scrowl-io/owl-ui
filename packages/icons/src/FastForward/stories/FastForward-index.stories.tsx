import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFastForwardProps } from '../FastForward.types';

import { display } from './FastForward-display.stories';
import { appearance } from './FastForward-appearance.stories';
import { size } from './FastForward-size.stories';
import { theme } from './FastForward-theme.stories';

export const FastForward = (args: IconsFastForwardProps) => (
  <Icon {...args}></Icon>
);

FastForward.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

FastForward.argTypes = {
  display,
  appearance,
  size,
  theme,
};
