import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsLocalCafeProps } from './LocalCafe.types';

export const Component = (props: IconsLocalCafeProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>local_cafe</Default>;
};

export default {
  Component,
};
