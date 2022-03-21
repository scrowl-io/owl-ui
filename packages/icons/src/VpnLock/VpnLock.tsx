import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsVpnLockProps } from './VpnLock.types';

export const Component = (props: IconsVpnLockProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>vpn_lock</Default>;
};

export default {
  Component,
};
