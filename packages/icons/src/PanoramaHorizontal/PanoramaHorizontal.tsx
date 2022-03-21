import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsPanoramaHorizontalProps } from './PanoramaHorizontal.types';

export const Component = (props: IconsPanoramaHorizontalProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>panorama_horizontal</Default>;
};

export default {
  Component,
};
