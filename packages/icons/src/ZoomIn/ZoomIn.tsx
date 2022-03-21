import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsZoomInProps } from './ZoomIn.types';

export const Component = (props: IconsZoomInProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>zoom_in</Default>;
};

export default {
  Component,
};
