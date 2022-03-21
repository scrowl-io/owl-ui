import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsZoomOutProps } from './ZoomOut.types';

export const Component = (props: IconsZoomOutProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>zoom_out</Default>;
};

export default {
  Component,
};
