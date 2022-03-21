import * as React from 'react';
import { component as Icon } from '../index';
import { IconsSendProps } from '../Send.types';

import { display } from './Send-display.stories';
import { appearance } from './Send-appearance.stories';
import { size } from './Send-size.stories';
import { theme } from './Send-theme.stories';

export const Send = (args: IconsSendProps) => (
  <Icon {...args}></Icon>
);

Send.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Send.argTypes = {
  display,
  appearance,
  size,
  theme,
};
