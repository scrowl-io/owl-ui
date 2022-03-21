import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsImportantDevicesProps } from './ImportantDevices.types';

export const Component = (props: IconsImportantDevicesProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>important_devices</Default>;
};

export default {
  Component,
};
