import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsWifiTetheringProps } from './WifiTethering.types';

export const Component = (props: IconsWifiTetheringProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>wifi_tethering</Default>;
};

export default {
  Component,
};
