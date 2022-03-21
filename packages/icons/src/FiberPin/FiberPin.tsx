import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsFiberPinProps } from './FiberPin.types';

export const Component = (props: IconsFiberPinProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>fiber_pin</Default>;
};

export default {
  Component,
};
