import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsAccountBalanceWalletProps } from './AccountBalanceWallet.types';

export const Component = (props: IconsAccountBalanceWalletProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>account_balance_wallet</Default>;
};

export default {
  Component,
};
