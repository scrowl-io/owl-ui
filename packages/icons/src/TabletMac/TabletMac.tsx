import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsTabletMacProps } from './TabletMac.types';

export const Component = (props: IconsTabletMacProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>tablet_mac</Default>;
};

export default {
  Component,
};
