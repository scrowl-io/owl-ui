import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsLayersClearProps } from './LayersClear.types';

export const Component = (props: IconsLayersClearProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>layers_clear</Default>;
};

export default {
  Component,
};
