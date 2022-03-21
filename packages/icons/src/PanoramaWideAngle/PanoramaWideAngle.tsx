import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsPanoramaWideAngleProps } from './PanoramaWideAngle.types';

export const Component = (props: IconsPanoramaWideAngleProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>panorama_wide_angle</Default>;
};

export default {
  Component,
};
