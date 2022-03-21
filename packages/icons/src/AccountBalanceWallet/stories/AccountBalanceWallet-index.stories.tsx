import * as React from 'react';
import { component as Icon } from '../index';
import { IconsAccountBalanceWalletProps } from '../AccountBalanceWallet.types';

import { display } from './AccountBalanceWallet-display.stories';
import { appearance } from './AccountBalanceWallet-appearance.stories';
import { size } from './AccountBalanceWallet-size.stories';
import { theme } from './AccountBalanceWallet-theme.stories';

export const AccountBalanceWallet = (args: IconsAccountBalanceWalletProps) => (
  <Icon {...args}></Icon>
);

AccountBalanceWallet.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

AccountBalanceWallet.argTypes = {
  display,
  appearance,
  size,
  theme,
};
