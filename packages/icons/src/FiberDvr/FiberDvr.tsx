import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsFiberDvrProps } from './FiberDvr.types';

export const Component = (props: IconsFiberDvrProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>fiber_dvr</Default>;
};

export default {
  Component,
};
