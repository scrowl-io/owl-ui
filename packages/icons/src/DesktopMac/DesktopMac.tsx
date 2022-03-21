import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsDesktopMacProps } from './DesktopMac.types';

export const Component = (props: IconsDesktopMacProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>desktop_mac</Default>;
};

export default {
  Component,
};
