import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsDevicesProps } from './Devices.types';

export const Component = (props: IconsDevicesProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>devices</Default>;
};

export default {
  Component,
};
