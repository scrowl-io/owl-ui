import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsDevicesOtherProps } from './DevicesOther.types';

export const Component = (props: IconsDevicesOtherProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>devices_other</Default>;
};

export default {
  Component,
};
