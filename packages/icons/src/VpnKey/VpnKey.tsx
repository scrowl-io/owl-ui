import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsVpnKeyProps } from './VpnKey.types';

export const Component = (props: IconsVpnKeyProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>vpn_key</Default>;
};

export default {
  Component,
};
