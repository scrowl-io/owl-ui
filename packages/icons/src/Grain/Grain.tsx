import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsGrainProps } from './Grain.types';

export const Component = (props: IconsGrainProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>grain</Default>;
};

export default {
  Component,
};
