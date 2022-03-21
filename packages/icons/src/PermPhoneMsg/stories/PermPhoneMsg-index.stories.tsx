import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPermPhoneMsgProps } from '../PermPhoneMsg.types';

import { display } from './PermPhoneMsg-display.stories';
import { appearance } from './PermPhoneMsg-appearance.stories';
import { size } from './PermPhoneMsg-size.stories';
import { theme } from './PermPhoneMsg-theme.stories';

export const PermPhoneMsg = (args: IconsPermPhoneMsgProps) => (
  <Icon {...args}></Icon>
);

PermPhoneMsg.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

PermPhoneMsg.argTypes = {
  display,
  appearance,
  size,
  theme,
};
