import * as React from 'react';
import { component as Icon } from '../index';
import { IconsSmsFailedProps } from '../SmsFailed.types';

import { display } from './SmsFailed-display.stories';
import { appearance } from './SmsFailed-appearance.stories';
import { size } from './SmsFailed-size.stories';
import { theme } from './SmsFailed-theme.stories';

export const SmsFailed = (args: IconsSmsFailedProps) => (
  <Icon {...args}></Icon>
);

SmsFailed.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

SmsFailed.argTypes = {
  display,
  appearance,
  size,
  theme,
};
