import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsFiberNewProps } from './FiberNew.types';

export const Component = (props: IconsFiberNewProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>fiber_new</Default>;
};

export default {
  Component,
};
