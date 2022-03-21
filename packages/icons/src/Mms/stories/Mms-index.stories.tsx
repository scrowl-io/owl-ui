import * as React from 'react';
import { component as Icon } from '../index';
import { IconsMmsProps } from '../Mms.types';

import { display } from './Mms-display.stories';
import { appearance } from './Mms-appearance.stories';
import { size } from './Mms-size.stories';
import { theme } from './Mms-theme.stories';

export const Mms = (args: IconsMmsProps) => (
  <Icon {...args}></Icon>
);

Mms.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Mms.argTypes = {
  display,
  appearance,
  size,
  theme,
};
