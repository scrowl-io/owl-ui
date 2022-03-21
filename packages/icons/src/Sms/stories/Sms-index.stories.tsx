import * as React from 'react';
import { component as Icon } from '../index';
import { IconsSmsProps } from '../Sms.types';

import { display } from './Sms-display.stories';
import { appearance } from './Sms-appearance.stories';
import { size } from './Sms-size.stories';
import { theme } from './Sms-theme.stories';

export const Sms = (args: IconsSmsProps) => (
  <Icon {...args}></Icon>
);

Sms.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Sms.argTypes = {
  display,
  appearance,
  size,
  theme,
};
