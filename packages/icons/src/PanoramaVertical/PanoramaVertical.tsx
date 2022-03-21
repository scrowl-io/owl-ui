import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsPanoramaVerticalProps } from './PanoramaVertical.types';

export const Component = (props: IconsPanoramaVerticalProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>panorama_vertical</Default>;
};

export default {
  Component,
};
