import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsZoomOutMapProps } from './ZoomOutMap.types';

export const Component = (props: IconsZoomOutMapProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>zoom_out_map</Default>;
};

export default {
  Component,
};
