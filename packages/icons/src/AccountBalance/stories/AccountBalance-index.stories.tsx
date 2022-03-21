import * as React from 'react';
import { component as Icon } from '../index';
import { IconsAccountBalanceProps } from '../AccountBalance.types';

import { display } from './AccountBalance-display.stories';
import { appearance } from './AccountBalance-appearance.stories';
import { size } from './AccountBalance-size.stories';
import { theme } from './AccountBalance-theme.stories';

export const AccountBalance = (args: IconsAccountBalanceProps) => (
  <Icon {...args}></Icon>
);

AccountBalance.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

AccountBalance.argTypes = {
  display,
  appearance,
  size,
  theme,
};
