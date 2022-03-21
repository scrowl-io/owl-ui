import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsOfflinePinProps } from './OfflinePin.types';

export const Component = (props: IconsOfflinePinProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>offline_pin</Default>;
};

export default {
  Component,
};
