import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsAccountBalanceProps } from './AccountBalance.types';

export const Component = (props: IconsAccountBalanceProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>account_balance</Default>;
};

export default {
  Component,
};
