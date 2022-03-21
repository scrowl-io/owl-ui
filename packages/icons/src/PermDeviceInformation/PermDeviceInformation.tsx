import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsPermDeviceInformationProps } from './PermDeviceInformation.types';

export const Component = (props: IconsPermDeviceInformationProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>perm_device_information</Default>;
};

export default {
  Component,
};
