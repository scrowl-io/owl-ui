import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsLayersProps } from './Layers.types';

export const Component = (props: IconsLayersProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>layers</Default>;
};

export default {
  Component,
};
