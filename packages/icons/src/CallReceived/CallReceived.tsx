import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsCallReceivedProps } from './CallReceived.types';

export const Component = (props: IconsCallReceivedProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>call_received</Default>;
};

export default {
  Component,
};
