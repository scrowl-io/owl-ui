import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsPermScanWifiProps } from './PermScanWifi.types';

export const Component = (props: IconsPermScanWifiProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>perm_scan_wifi</Default>;
};

export default {
  Component,
};
