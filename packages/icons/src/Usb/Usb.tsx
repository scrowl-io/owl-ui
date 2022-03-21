import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsUsbProps } from './Usb.types';

export const Component = (props: IconsUsbProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>usb</Default>;
};

export default {
  Component,
};
