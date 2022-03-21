import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsTransformProps } from './Transform.types';

export const Component = (props: IconsTransformProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>transform</Default>;
};

export default {
  Component,
};
