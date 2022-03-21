import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsDialerSipProps } from './DialerSip.types';

export const Component = (props: IconsDialerSipProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>dialer_sip</Default>;
};

export default {
  Component,
};
