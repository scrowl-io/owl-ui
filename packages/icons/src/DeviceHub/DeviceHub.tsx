import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsDeviceHubProps } from './DeviceHub.types';

export const Component = (props: IconsDeviceHubProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>device_hub</Default>;
};

export default {
  Component,
};
