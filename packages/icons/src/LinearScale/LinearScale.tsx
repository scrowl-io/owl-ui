import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsLinearScaleProps } from './LinearScale.types';

export const Component = (props: IconsLinearScaleProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>linear_scale</Default>;
};

export default {
  Component,
};
