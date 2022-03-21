import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsFastForwardProps } from './FastForward.types';

export const Component = (props: IconsFastForwardProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>fast_forward</Default>;
};

export default {
  Component,
};
